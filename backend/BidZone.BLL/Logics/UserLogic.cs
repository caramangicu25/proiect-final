using BidZone.BLL.Core;
using BidZone.BLL.Interfaces;
using BidZone.DAL.Interfaces;
using BidZone.Models.DTOs;
using BidZone.Models.Entities;

namespace BidZone.BLL.Logics;

public class UserLogic : BaseLogic<UserDto>, IUserLogic
{
    private readonly IUserRepository _userRepository;

    public UserLogic(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public override IEnumerable<UserDto> GetAll() => throw new NotImplementedException();
    public override UserDto? GetById(int id) => throw new NotImplementedException();
}
