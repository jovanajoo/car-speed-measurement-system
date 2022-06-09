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
    public class SensorsController : ControllerBase
    {
        private ISensorBusiness sensorBusiness;
        public SensorsController(ISensorBusiness sensorBusiness)
        {
            this.sensorBusiness = sensorBusiness;
        }
        [HttpGet("Get")]
        public List<Sensor> GetAllSensor()
        {
            return this.sensorBusiness.GetAllSensors();
        }

        [HttpGet("Get/{serial_no}")]
        public Sensor GetSensorBySerialNumber(int serial_no)
        {
            return this.sensorBusiness.GetSensorBySerialNumber(serial_no);
        }

        [HttpGet("GetInactive")]
        public List<Sensor> GetSensorsInactive()
        {
            return this.sensorBusiness.GetSensorsInactive();
        }

        [HttpPost("Insert")]
        public bool InsertSensor([FromBody] Sensor sernsor)
        {
            return this.sensorBusiness.InsertSensor(sernsor);
        }

        [HttpPut("Update")]
        public bool UpdateSensor([FromBody] Sensor sernsor)
        {
            return this.sensorBusiness.UpdateSensor(sernsor);
        }

        [HttpDelete("Delete/{serial_no}")]
        public bool DeleteSensor(int serial_no)
        {
            return this.sensorBusiness.DeleteSensor(serial_no);
        }
    }
}
