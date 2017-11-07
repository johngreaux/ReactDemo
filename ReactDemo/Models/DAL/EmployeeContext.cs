using System.Data.Entity;

namespace ReactDemo.Models.DAL
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext() : base()
        {
            Database.SetInitializer(new EmployeeDBInitializer());
        }

        public DbSet<Employee> Employee { get; set; }
    }
}