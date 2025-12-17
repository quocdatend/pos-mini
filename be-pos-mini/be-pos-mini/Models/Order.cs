namespace be_pos_mini.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderId { get; set; }
        public int TotalPrice { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
