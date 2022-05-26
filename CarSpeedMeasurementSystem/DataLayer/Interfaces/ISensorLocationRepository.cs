using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Interfaces
{
    public interface ISensorLocationRepository
    {
        List<SensorLocation> GetAllSensorLocations();
        int InsertSensorLocation(SensorLocation l);
        int UpdateSensorLocation(SensorLocation l);
        int DeleteSensorLocation(int id);
    }
}
