using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Interfaces
{
    public interface ISensorRepository
    {
        List<Sensor> GetAllSensors();
        int InsertSensor(Sensor s);
        int UpdateSensor(Sensor s);
        int DeleteSensor(int id);
    }
}
