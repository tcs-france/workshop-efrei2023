namespace exam_api.Models.Services
{
    public class AnswerParameter {
        public Guid User { get; set; }
        public Guid QuestionId { get; set; }
        public string? Answer { get; set; }
    }
}