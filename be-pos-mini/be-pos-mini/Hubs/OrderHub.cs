using be_pos_mini.Models;
using Microsoft.AspNetCore.SignalR;

namespace be_pos_mini.Hubs
{
    public class OrderHub : Hub
    {
        public async Task SendOrders(List<Order> orders)
        {
            await Clients.All.SendAsync("ReceiveOrders", orders);
        }
        public async Task SendNewOrder(Order order)
        {
            await Clients.All.SendAsync("ReceiveNewOrder", order);
        }
    }

}
