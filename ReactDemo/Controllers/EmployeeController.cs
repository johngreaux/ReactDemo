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

        public IQueryable<Employee> GetEmployeeList()
        {
            return _repo.GetEmployees().AsQueryable();
        }
    }
}
