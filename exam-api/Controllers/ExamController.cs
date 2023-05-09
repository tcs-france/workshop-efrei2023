using exam_api.Constants;
using exam_api.Models.Api;
using exam_api.Models.Services;
using exam_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace exam_api.Controllers;

[ApiController]
[Route("/exam")]
public class ExamController : ControllerBase
{
    private readonly RedisService _redisService;
    private readonly ExamService _examService;

    public ExamController(RedisService redisService, ExamService examService)
    {
        _redisService = redisService;
        _examService = examService;
    }

    [HttpGet]
    [Route("question")]
    public async Task<ActionResult<ApiResponse<QuestionResult>>> Question()
    {
        var user = await _redisService.GetCacheData<IdentityCache>(RedisConstants.USER_IDENTITY);
        if (user == null)
        {
            return Unauthorized("User not created");
        }

        var progress = await _redisService.GetCacheData<ProgressCache>(RedisConstants.EXAM_PROGRESS);
        var status = progress?.IsDone ?? false;
        if (status)
        {
            return BadRequest("Exam is done");
        }

        var id = progress?.QuestionId ?? null;
        var question = await _examService.GetQuestion(id);
        if (question == default)
        {
            return NotFound("Question not found");
        }

        var response = new ApiResponse<QuestionResult>() { Message = "Question found", Data = question };

        return Ok(response);
    }

    [HttpPost]
    [Route("answer")]
    public async Task<ActionResult<ApiResponse<AnswerResponse>>> Answer(ApiAnswerRequest request)
    {
        var user = await _redisService.GetCacheData<IdentityCache>(RedisConstants.USER_IDENTITY);
        if (user == null)
        {
            return Unauthorized("User not created");
        }

        var parameters = new AnswerParameter()
        {
            User = user.Id,
            QuestionId = request.QuestionId,
            Answer = request.Answer
        };

        var answer = await _examService.SubmitAnswer(parameters);
        if (answer == default)
        {
            return NotFound("Question not found");
        }

        var progress = new ProgressCache { QuestionId = answer.NextId, IsDone = answer.NextId == null };
        await _redisService.SetCacheData(RedisConstants.EXAM_PROGRESS, progress);

        var response = new ApiResponse<AnswerResponse>() 
            { Message = "Answer result", Data = new AnswerResponse { IsQuestionRemaining = answer.NextId != null} };

        return Ok(response);
    }

    [HttpGet]
    [Route("progress")]
    public async Task<ActionResult<ApiResponse<ProgressResponse>>> Progress()
    {
        var user = await _redisService.GetCacheData<IdentityCache>(RedisConstants.USER_IDENTITY);
        if (user == null)
        {
            return Unauthorized("User not created");
        }

        var progress = await _redisService.GetCacheData<ProgressCache>(RedisConstants.EXAM_PROGRESS);
        var status = progress == default ? ExamStatus.NOT_STARTED : progress.IsDone ? ExamStatus.FINISHED : ExamStatus.IN_PROGRESS;
        var response = new ApiResponse<ProgressResponse>() 
            { Message = "Progress Status", Data = new ProgressResponse { Status = status } };

        return Ok(response);
    }

    #if DEBUG
    [HttpGet]
    [Route("reset")]
    public async Task<bool> Reset()
    {
        return await _redisService.DeleteCacheData(RedisConstants.EXAM_PROGRESS);
    }
    #endif
}