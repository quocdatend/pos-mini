

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
                },
                new Product
                {
                    Id = 4,
                    Name = "Bánh dâu",
                    Price = 15000,
                    Image = "/banh-dau.png"
                },
                new Product
                {
                    Id = 5,
                    Name = "Nước Coca-cola",
                    Price = 5000,
                    Image = "/cocacola.png"
                },
                new Product
                {
                    Id = 6,
                    Name = "Nước Pesi",
                    Price = 5000,
                    Image = "/pesi.png"
                }
            );
        }
        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Orders { get; set; }
    }
}
