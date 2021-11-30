using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using System.Net.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ERISMobileWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ERISReportController : ControllerBase
    {
        public AppDb Db { get; }

        public ERISReportController(AppDb db)
        {
            Db = db;
        }

        // GET: api/<ERISReportController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Db.Connection.Open();
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"INSERT INTO eristesting.employeeid () VALUES(NULL);";
            cmd.ExecuteNonQuery();
            return new string[] { "value1", "value2" };
        }

        // GET api/<ERISReportController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ERISReportController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<ERISReportController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ERISReportController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
