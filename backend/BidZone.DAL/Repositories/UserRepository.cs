using BidZone.DAL.Interfaces;
using BidZone.Models;
using BidZone.Models.Entities;

namespace BidZone.DAL.Repositories;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public IEnumerable<User> GetAll() => throw new NotImplementedException();
    public User? GetById(int id) => throw new NotImplementedException();
    public void Insert(User user) => throw new NotImplementedException();
    public void Delete(int id) => throw new NotImplementedException();
}
