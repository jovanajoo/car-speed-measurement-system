using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Interfaces
{
    public interface ISensorReadingBusiness
    {
        List<SensorReading> GetAllSensorReadings();
        bool InsertSensorReading(SensorReading r);
        List<SensorReading> GetSensorReadingsBySensor(int serial_no);
        List<SensorReading> GetSensorReadingsByLocation(int id);
    }
}
