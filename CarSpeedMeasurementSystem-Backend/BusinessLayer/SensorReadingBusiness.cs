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

        public List<SensorReading> GetCurrentMonthReadings()
        {
            int currentMonth = DateTime.Now.Month;
            return this.GetAllSensorReadings().Where(r => r.timestemp.Month.Equals(currentMonth)).ToList();
        }

        public List<List<SensorReading>> GetSixHourReadings()
        {
            List<SensorReading> first = this.GetAllSensorReadings().Where(r => r.timestemp.Hour >= 0 && r.timestemp.Hour <= 6).ToList();
            List<SensorReading> second = this.GetAllSensorReadings().Where(r => r.timestemp.Hour >= 7 && r.timestemp.Hour <= 12).ToList();
            List<SensorReading> third = this.GetAllSensorReadings().Where(r => r.timestemp.Hour >= 13 && r.timestemp.Hour <= 18).ToList();
            List<SensorReading> fourth = this.GetAllSensorReadings().Where(r => r.timestemp.Hour >= 19 && r.timestemp.Hour < 24).ToList();
            List<List<SensorReading>> listOfSensorReadings = new() { first, second, third, fourth };

            return listOfSensorReadings;
        }

    }
}
