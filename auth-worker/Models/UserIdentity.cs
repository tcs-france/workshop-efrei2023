using System;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace auth_worker.Models;

public class UserIdentity
{
    public string First_Name { get; set; }
    public string Last_Name { get; set; }
    public string Email { get; set; }

    public object ToExamObject() => new { FirstName = this.First_Name, LastName = this.Last_Name, Email = this.Email };
    public object ToCacheObject(Guid id) => new { Id = id, FirstName = this.First_Name, LastName = this.Last_Name, Email = this.Email };
}