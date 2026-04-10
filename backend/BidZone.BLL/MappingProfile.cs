using AutoMapper;
using BidZone.Models.DTOs;
using BidZone.Models.Entities;

namespace BidZone.BLL;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserDto>();
    }
}
