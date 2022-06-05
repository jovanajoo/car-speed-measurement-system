using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Interfaces
{
    public interface ISensorLocationBusiness
    {
        List<SensorLocation> GetAllSensorLocations();
        bool InsertSensorLocation(SensorLocation l);
        bool UpdateSensorLocation(SensorLocation l);
        bool DeleteSensorLocation(int id);
    }
}
