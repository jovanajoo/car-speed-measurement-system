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
    public class SensorLocationBusiness:ISensorLocationBusiness
    {
        private readonly ISensorLocationRepository sensorLocationRepository;
        public SensorLocationBusiness(ISensorLocationRepository sensorLocationRepository)
        {
            this.sensorLocationRepository = sensorLocationRepository;
        }
        public List<SensorLocation> GetAllSensorLocations()
        {
            List<SensorLocation> authors = this.sensorLocationRepository.GetAllSensorLocations();
            return (authors.Count > 0) ? authors : null;
        }
        public bool InsertSensorLocation(SensorLocation l)
        {
            return (this.sensorLocationRepository.InsertSensorLocation(l) > 0);
        }
        public bool UpdateSensorLocation(SensorLocation l)
        {
            return (this.sensorLocationRepository.UpdateSensorLocation(l) > 0);
        }
        public bool DeleteSensorLocation(int id)
        {
            return (this.sensorLocationRepository.DeleteSensorLocation(id) > 0);
        }
    }
}
