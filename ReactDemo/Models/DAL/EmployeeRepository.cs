using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace ReactDemo.Models.DAL
{
    public class EmployeeRepository : IEmployeeRepository, IDisposable
    {
        private EmployeeContext context;
        private bool disposed = false;

        public EmployeeRepository(EmployeeContext context)
        {
            this.context = context;
        }

        public IQueryable<Employee> GetEmployees()
        {
            return context.Employee;
        }

        public Employee GetEmployeeById(int id)
        {
            return context.Employee.Find(id);
        }

        public void AddEmployee(Employee employee)
        {
            context.Employee.Add(employee);
        }

        public void UpdateEmployee(Employee employee)
        {
            context.Entry(employee).State = EntityState.Modified;
        }

        public void DeleteEmployee(int id)
        {
            Employee Employee = context.Employee.Find(id);
            context.Employee.Remove(Employee);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}