using be_pos_mini.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace be_pos_mini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController
    {
        static private List<Product> products = new List<Product>
        {
            new Product
            {
                Id = 1,
                Name = "Test",
                Description = "abc",
                Price = 10,
                Image = "/abc"
            },
            new Product
            {
                Id = 2,
                Name = "demo",
                Description = "aaa",
                Price = 12,
                Image = "/aaa"
            }, 
        };
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return products;
        }
    }
}
