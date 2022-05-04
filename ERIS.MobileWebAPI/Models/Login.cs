using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ERISMobileWebAPI.Models
{
    public class Login
    {
        [Key]
        public int LoginID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
