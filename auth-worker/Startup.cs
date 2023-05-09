using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using auth_worker.Services;
using Microsoft.Extensions.Configuration;

[assembly: FunctionsStartup(typeof(auth_worker.Startup))]
namespace auth_worker;

public class Startup : FunctionsStartup
{
    public override void Configure(IFunctionsHostBuilder builder)
    {
        var centerApiUrl = builder.GetContext().Configuration.GetValue<string>("CenterApiUrl");

        builder.Services.AddScoped<RedisService>();
        builder.Services.AddScoped<ExamService>();
    }
}