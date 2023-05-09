using exam_api.Constants;
using exam_api.Models.Api;
using exam_api.Models.Services;
using exam_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace exam_api.Controllers;

[ApiController]
[Route("/user")]
public class UserController : ControllerBase
{
    private readonly RedisService _redisService;

    public UserController(RedisService redisService)
    {
        _redisService = redisService;
    }

    #if DEBUG
    [HttpGet]
    [Route("create/{id}")]
    public async Task<bool> Create(Guid id)
    {
        var identity = new IdentityCache { Id = id, FirstName = "John", LastName = "Doe", Email = "john@doe.com" };
        return await _redisService.SetCacheData(RedisConstants.USER_IDENTITY, identity);
    }

    [HttpGet]
    [Route("delete")]
    public async Task<bool> Delete()
    {
        return await _redisService.DeleteCacheData(RedisConstants.USER_IDENTITY);
    }
    #endif

    [HttpGet]
    [Route("exist")]
    public async Task<ActionResult<ApiResponse<IdentityResponse>>> Exist()
    {
        var user = await _redisService.GetCacheData<IdentityCache>(RedisConstants.USER_IDENTITY);
        var response = new ApiResponse<IdentityResponse>() { Message = "User Exist result", Data = new IdentityResponse { Exist = user != null, Identity = user } };

        return Ok(response);
    }
}