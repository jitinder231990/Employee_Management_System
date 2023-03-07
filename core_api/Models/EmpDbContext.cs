using Microsoft.EntityFrameworkCore;

namespace core_api.Models
{
    public class EmpDbContext : DbContext
    {
        public DbSet<Employee> employees { get; set; }

        public EmpDbContext(DbContextOptions<EmpDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("tbl_employee");

        }
    }
}
