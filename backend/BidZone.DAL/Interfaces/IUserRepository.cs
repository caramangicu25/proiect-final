using BidZone.Models.Entities;

namespace BidZone.DAL.Interfaces;

public interface IUserRepository
{
    IEnumerable<User> GetAll();
    User? GetById(int id);
    void Insert(User user);
    void Delete(int id);
}
