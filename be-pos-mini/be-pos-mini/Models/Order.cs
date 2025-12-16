namespace be_pos_mini.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public string Name { get; set; }
        public int TotalPrice { get; set; }
        public DateTime DateTime { get; set; }
    }
}
