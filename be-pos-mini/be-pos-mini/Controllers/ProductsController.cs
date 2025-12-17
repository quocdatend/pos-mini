using be_pos_mini.Data;
using be_pos_mini.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace be_pos_mini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController: ControllerBase
    {
        private readonly PosMiniContext _context;
        public ProductsController(PosMiniContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return Ok(await _context.Products.ToListAsync());
        }
    }
}
