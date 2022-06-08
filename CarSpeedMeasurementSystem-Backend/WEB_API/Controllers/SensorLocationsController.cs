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

        [HttpGet("Get/{entryNo}")]
        public SensorLocation GetSensorLocation(int entryNo)
        {
            return this.sensorLocationBusiness.GetSensorLocation(entryNo);
        }

        [HttpGet("GetActive")]
        public List<SensorLocation> GetAllActiveSensorLocations()
        {
            return this.sensorLocationBusiness.GetAllActiveSensorLocations();
        }

        [HttpPost("Insert")]
        public bool InsertSensorLocation([FromBody] SensorLocation l)
        {
            return this.sensorLocationBusiness.InsertSensorLocation(l);
        }

        [HttpPut("Update")]
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
