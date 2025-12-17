

using be_pos_mini.Models;
using Microsoft.EntityFrameworkCore;

namespace be_pos_mini.Data
{
    public class PosMiniContext : DbContext
    {
        public PosMiniContext(DbContextOptions<PosMiniContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Bánh Socola",
                    Price = 17000,
                    Image = "/banh-socola.png"
                },
                new Product
                {
                    Id = 2,
                    Name = "Bánh Bao",
                    Price = 8000,
                    Image = "/banh-bao.png"
                },
                new Product
                {
                    Id = 3,
                    Name = "Bánh Ngọt",
                    Price = 12000,
                    Image = "/banh-ngot.png"
                }
            );
        }
        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Orders { get; set; }
    }
}
