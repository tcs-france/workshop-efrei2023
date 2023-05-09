using System;

namespace auth_worker.Models;

public class SignupResponse {
    public string Message { get; set; }
    public Guid? Token { get; set; }
}