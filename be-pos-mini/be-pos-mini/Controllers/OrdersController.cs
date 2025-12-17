using be_pos_mini.Data;
using be_pos_mini.Hubs;
using be_pos_mini.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
namespace be_pos_mini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly PosMiniContext _context;
        private readonly IHubContext<OrderHub> _hubContext;

        public OrdersController(
            PosMiniContext context,
            IHubContext<OrderHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrders()
        {
            var orders = await _context.Orders
                .OrderByDescending(o => o.CreatedAt)
                .ToListAsync();
            return Ok(orders);
        }
        [HttpPost]
        public async Task<ActionResult> CreateOrder(Order order)
        {
            order.CreatedAt = DateTime.Now;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            await _hubContext.Clients.All
                .SendAsync("ReceiveNewOrder", order);
            return Ok(order);
        }
    }
}
