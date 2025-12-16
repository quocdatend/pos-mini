

using be_pos_mini.Models;
using Microsoft.EntityFrameworkCore;

namespace be_pos_mini.Data
{
    public class PosMiniContext : DbContext
    {
        public PosMiniContext(DbContextOptions<PosMiniContext> options) : base(options) { }
        
        public DbSet<Product> Products { get; set; }
    }
}
