namespace core_api.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public string Department { get; set; }
    }
}
