using BusinessLayer.Interfaces;
using DataLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratorsController : ControllerBase
    {
        private readonly IAdministratorBusiness administratorBusiness;
        public AdministratorsController(IAdministratorBusiness administratorBusiness)
        {
            this.administratorBusiness = administratorBusiness;
        }
        [HttpGet("Get")]
        public List<Administrator> GetAllAdministrators()
        {
            return this.administratorBusiness.GetAllAdministrators();
        }

        [HttpGet("Get/{id}")]
        public Administrator GetAdministratorById(int id)
        {
            return this.administratorBusiness.GetAdministratorById(id);
        }

        [HttpGet("GetByUsername/{username}")]
        public Administrator GetAdministratorByUsername(string username)
        {
            return this.administratorBusiness.GetAdministratorByUsername(username);
        }

        [HttpGet("UsernameExists/{username}")]
        public bool UsernameExists(string username)
        {
            return this.administratorBusiness.UsernameExists(username);
        }

        [HttpPost("Insert")]
        public bool InsertAdministrator([FromBody] Administrator administrator)
        {
            return this.administratorBusiness.InsertAdministrator(administrator);
        }

        [HttpPut("Update")]
        public bool UpdateAdministrator([FromBody] Administrator administrator)
        {
            return this.administratorBusiness.UpdateAdministrator(administrator);
        }

        [HttpDelete("Delete/{id}")]
        public bool DeleteAdministrator(int id)
        {
            return this.administratorBusiness.DeleteAdministrator(id);
        }
    }
}
