namespace exam_api.Models.Api;

public class ApiAnswerRequest
{
    public Guid QuestionId { get; set; }
    public string? Answer { get; set; }
}