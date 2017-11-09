using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ReactDemo.Models
{
    public class Employee
    {
        public Employee()
        {

        }
        
        [Key]
        public int EmployeeId { get; set; }
        public string Avatar { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public string Interests { get; set; }
    }
}