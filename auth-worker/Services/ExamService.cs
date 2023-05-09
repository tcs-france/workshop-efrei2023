using System;
using System.Net;
using System.Text;
using Newtonsoft.Json;
using auth_worker.Models;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace auth_worker.Services;

public class ExamService
{
    private readonly HttpClient _httpClient;

    public ExamService(IConfiguration configuration)
    {
        _httpClient = new HttpClient();
        _httpClient.BaseAddress = new Uri(configuration.GetValue<string>("CenterApiUrl"));
    }

    public async Task<Guid?> RegisterUser(object userObject)
    {
        var result = await _httpClient.PostAsync("/auth/signup", new StringContent(JsonConvert.SerializeObject(userObject), Encoding.UTF8, "application/json"));
        if (result.StatusCode != HttpStatusCode.OK)
        {
            return null;
        }

        var response = JsonConvert.DeserializeObject<SignupResponse>(await result.Content.ReadAsStringAsync());

        return response.Token;
    }
}