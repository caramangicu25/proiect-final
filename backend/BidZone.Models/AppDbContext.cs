using BidZone.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BidZone.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
}
