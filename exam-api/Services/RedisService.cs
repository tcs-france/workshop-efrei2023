using Newtonsoft.Json;
using StackExchange.Redis;

namespace exam_api.Services;

public class RedisService
{
    private readonly IDatabase _db;

    public RedisService(IConfiguration configuration)
    {
        var redis = ConnectionMultiplexer.Connect(configuration.GetConnectionString("Redis"));
        _db = redis.GetDatabase();
    }

    public async Task<T?> GetCacheData<T>(string key)
    {
        if (_db.KeyExists(key))
        {
            var value = await _db.StringGetAsync(key);
            if (!string.IsNullOrEmpty(value))
            {
                return JsonConvert.DeserializeObject<T>(value!);
            }
        }

        return default;
    }

    public async Task<bool> DeleteCacheData(string key)
    {
        if (_db.KeyExists(key))
        {
            return await _db.KeyDeleteAsync(key);
        }

        return false;
    }

    public async Task<bool> SetCacheData<T>(string key, T value)
    {
        return await _db.StringSetAsync(key, JsonConvert.SerializeObject(value));
    }
}