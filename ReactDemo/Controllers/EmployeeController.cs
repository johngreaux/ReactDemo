using ReactDemo.Models;
using ReactDemo.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactDemo.Controllers
{
    public class EmployeeController : ApiController
    {
        private IEmployeeRepository _repo;

        public EmployeeController(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        // GET: api/employee
        public IEnumerable<Employee> Get()
        {
            return _repo.GetEmployees();
        }

        // GET: api/employee/5
        public Employee Get(int id)
        {
            return _repo.GetEmployeeById(id);
        }

        // POST: api/employee
        public void Post(string jsonData)
        {
            _repo.AddEmployee(new Employee());
            _repo.Save();
        }

        // PUT: api/employee/5
        public void Put(int id, string jsonData)
        {
            var employee = _repo.GetEmployeeById(id);
            _repo.Save();
        }

        // DELETE: api/employee/5
        public void Delete(int id)
        {
            _repo.DeleteEmployee(id);
            _repo.Save();
        }
    }
}
