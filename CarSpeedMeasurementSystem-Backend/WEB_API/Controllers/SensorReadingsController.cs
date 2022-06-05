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
    public class SensorReadingsController : ControllerBase
    {
        private readonly ISensorReadingBusiness sensorReadingBusiness;
        public SensorReadingsController(ISensorReadingBusiness sensorReadingBusiness)
        {
            this.sensorReadingBusiness = sensorReadingBusiness;
        }
        [HttpGet("Get")]
        public List<SensorReading> GetAllSensorReadings()
        {
            return this.sensorReadingBusiness.GetAllSensorReadings();
        }

        [HttpGet("GetBySensor/{serial_no}")]
        public List<SensorReading> GetSensorReadingBySensor(int serial_no)
        {
            return this.sensorReadingBusiness.GetSensorReadingsBySensor(serial_no);
        }

        [HttpGet("GetByLocation/{id}")]
        public List<SensorReading> GetSensorReadingByLocation(int id)
        {
            return this.sensorReadingBusiness.GetSensorReadingsByLocation(id);
        }

        [HttpPost("Insert")]
        public bool InsertSensorReading([FromBody] SensorReading r)
        {
            return this.sensorReadingBusiness.InsertSensorReading(r);
        }
    }
}
