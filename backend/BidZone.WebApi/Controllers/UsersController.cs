using BidZone.BLL.Interfaces;
using BidZone.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BidZone.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserLogic _userLogic;

    public UsersController(IUserLogic userLogic)
    {
        _userLogic = userLogic;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        // TODO: return _userLogic.GetAll();
        return Ok(new List<UserDto>());
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        // TODO: return _userLogic.GetById(id);
        return Ok(new UserDto { Id = id, Username = "placeholder" });
    }
}
