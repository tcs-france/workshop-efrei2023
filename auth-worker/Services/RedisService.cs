using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StackExchange.Redis;

namespace auth_worker.Services;

public class RedisService
{
    private readonly IDatabase _db;

    public RedisService(IConfiguration configuration)
    {
        var redis = ConnectionMultiplexer.Connect(configuration.GetConnectionString("Redis"));
        _db = redis.GetDatabase();
    }

    public async Task<bool> SetCacheData<T>(string key, T value)
    {
        return await _db.StringSetAsync(key, JsonConvert.SerializeObject(value));
    }
}