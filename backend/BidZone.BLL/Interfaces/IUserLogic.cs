using BidZone.Models.DTOs;

namespace BidZone.BLL.Interfaces;

public interface IUserLogic
{
    IEnumerable<UserDto> GetAll();
    UserDto? GetById(int id);
}
