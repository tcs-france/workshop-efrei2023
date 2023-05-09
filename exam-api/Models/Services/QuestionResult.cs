namespace exam_api.Models.Services;

public class QuestionResult {
    public Guid Id { get; set; }
    public string? Question { get; set; }
    public string?[]? Options { get; set; }
    public int Current { get; set; }
    public int Total { get; set; }
}