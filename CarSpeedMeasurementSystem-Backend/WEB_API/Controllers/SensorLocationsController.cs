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
    public class SensorLocationsController : ControllerBase
    {
        private readonly ISensorLocationBusiness sensorLocationBusiness;
        public SensorLocationsController(ISensorLocationBusiness sensorLocationBusiness)
        {
            this.sensorLocationBusiness = sensorLocationBusiness;
        }
        [HttpGet("Get")]
        public List<SensorLocation> GetAllSensorLocations()
        {
            return this.sensorLocationBusiness.GetAllSensorLocations();
        }

        [HttpPost("Insert")]
        public bool InsertSensorLocation([FromBody] SensorLocation l)
        {
            return this.sensorLocationBusiness.InsertSensorLocation(l);
        }

        [HttpPatch("Update")]
        public bool UpdateSensorLocation([FromBody] SensorLocation l)
        {
            return this.sensorLocationBusiness.UpdateSensorLocation(l);
        }

        [HttpDelete("Delete/{id}")]
        public bool DeleteSensorLocation(int id)
        {
            return this.sensorLocationBusiness.DeleteSensorLocation(id);
        }
    }
}
