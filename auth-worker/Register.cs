using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using auth_worker.Models;
using auth_worker.Services;
using System.Threading.Tasks;
using auth_worker.Constants;

namespace auth_worker
{
    public class Register
    {
        private readonly RedisService _redisService;
        private readonly ExamService _examService;

        public Register(RedisService redisService, ExamService examService)
        {
            _redisService = redisService;
            _examService = examService;
        }

        [FunctionName("register")]
        public async Task Run([ServiceBusTrigger("exam-auth", Connection = "AzureConnStr")]UserIdentity user, ILogger log)
        {
            if (user == null) 
            {
                log.LogInformation("No user data found.");
                return;
            }            

            var token = await _examService.RegisterUser(user.ToExamObject());
            if (token == null)
            {
                log.LogInformation("Failed to register user, no token provided.");
                return;
            }

            var result = await _redisService.SetCacheData<object>(RedisConstants.USER_IDENTITY, user.ToCacheObject(token.Value));
            if (!result)
            {
                log.LogInformation("Failed to set cache data.");
                return;
            }

            log.LogInformation($"User registered succesfully (Token: {token})");
        }
    }
}
