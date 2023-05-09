using exam_api.Models.Services;

namespace exam_api.Models.Api;

public class IdentityResponse
{
    public bool Exist { get; set; }
    public IdentityCache? Identity { get; set; }
}