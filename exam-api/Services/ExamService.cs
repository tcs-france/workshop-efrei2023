using System.Net;
using System.Text;
using exam_api.Models.Services;
using Newtonsoft.Json;

namespace exam_api.Services;

public class ExamService
{
    private readonly HttpClient _httpClient;

    public ExamService(IConfiguration configuration)
    {
        _httpClient = new HttpClient();
        _httpClient.BaseAddress = new Uri(configuration.GetValue<string>("CenterApiUrl"));
    }

    public async Task<QuestionResult?> GetQuestion(Guid? id = null)
    {
        var endpoint = $"/exam/question" + (id.HasValue ? $"?id={id.Value}" : "");
        var result = await _httpClient.GetAsync(endpoint);

        if (result.StatusCode != HttpStatusCode.OK)
        {
            return null;
        }

        return JsonConvert.DeserializeObject<QuestionResult>(await result.Content.ReadAsStringAsync());
    }

    public async Task<AnswerResult?> SubmitAnswer(AnswerParameter parameter)
    {
        var result = await _httpClient.PostAsync("/exam/answer", new StringContent(JsonConvert.SerializeObject(parameter), Encoding.UTF8, "application/json"));

        if (result.StatusCode != HttpStatusCode.OK)
        {
            return null;
        }

        return JsonConvert.DeserializeObject<AnswerResult>(await result.Content.ReadAsStringAsync());
    }
}