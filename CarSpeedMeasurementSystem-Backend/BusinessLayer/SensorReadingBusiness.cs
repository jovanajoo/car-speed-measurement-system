using BusinessLayer.Interfaces;
using DataLayer.Interfaces;
using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class SensorReadingBusiness:ISensorReadingBusiness
    {
        private readonly ISensorReadingRepository sensorReadingRepository;
        public SensorReadingBusiness(ISensorReadingRepository sensorReadingRepository)
        {
            this.sensorReadingRepository = sensorReadingRepository;
        }
        public List<SensorReading> GetAllSensorReadings()
        {
            List<SensorReading> sensorReadings = this.sensorReadingRepository.GetAllSensorReadings();
            return (sensorReadings.Count > 0) ? sensorReadings : null;
        }
        public bool InsertSensorReading(SensorReading r)
        {
            return (this.sensorReadingRepository.InsertSensorReading(r) > 0);
        }

        public List<SensorReading> GetSensorReadingsBySensor(int serial_no)
        {
            return this.sensorReadingRepository.GetAllSensorReadings().Where(r => r.sensorSerialNumber == serial_no).ToList();
        }

        public List<SensorReading> GetSensorReadingsByLocation(int id)
        {
            return this.sensorReadingRepository.GetAllSensorReadings().Where(r => r.idSensorLocation == id).ToList();
        }
    }
}
