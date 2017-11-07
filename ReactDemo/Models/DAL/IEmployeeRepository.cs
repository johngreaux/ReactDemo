using System;
using System.Linq;

namespace ReactDemo.Models.DAL
{
    public interface IEmployeeRepository : IDisposable
    {
        IQueryable<Employee> GetEmployees();         // Returns all people from the db
        Employee GetEmployeeById(int id);           // Returns a single person based on the given id
        void AddEmployee(Employee employee);          // Adds a new person to the db  
        void UpdateEmployee(Employee employee);       // Sets the given person entity state to modified
        void DeleteEmployee(int id);              // Remove a person from the db
        void Save();                            // Save all changes to the context
    }
}