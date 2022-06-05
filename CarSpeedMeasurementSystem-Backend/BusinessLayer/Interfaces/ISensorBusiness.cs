using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Interfaces
{
    public interface ISensorBusiness
    {
        List<Sensor> GetAllSensors();
        bool InsertSensor(Sensor s);
        bool UpdateSensor(Sensor s);
        bool DeleteSensor(int serial_no);
        Sensor GetSensorBySerialNumber(int serialNo);
    }
}
