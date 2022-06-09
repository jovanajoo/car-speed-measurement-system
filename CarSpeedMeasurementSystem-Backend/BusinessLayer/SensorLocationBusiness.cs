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
            List<SensorLocation> sensors = this.sensorLocationRepository.GetAllSensorLocations();
            return (sensors.Count > 0) ? sensors : null;
        }
        public List<SensorLocation> GetAllActiveSensorLocations()
        {
            List<SensorLocation> sensors = this.sensorLocationRepository.GetAllSensorLocations().Where(sl => sl.active).ToList();
            return (sensors.Count > 0) ? sensors : null;
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

        public bool SetInactiveSensorLocation(SensorLocation l)
        {
            l.active = false;
            return (this.sensorLocationRepository.UpdateSensorLocation(l) > 0);
        }

        public SensorLocation GetSensorLocation(int entryNo)
        {
            return this.sensorLocationRepository.GetAllSensorLocations().FirstOrDefault(sl => sl.entryNo == entryNo);
        }

        public List<SensorLocation> GetSensorLocationBySerialNo(int serialNo)
        {
            return this.sensorLocationRepository.GetAllSensorLocations().Where(sl => sl.sensorSerialNumber == serialNo).ToList();
        }

        public SensorLocation GetActiveSensorLocationBySerialNo(int serialNo)
        {
            return this.sensorLocationRepository.GetAllSensorLocations().FirstOrDefault(sl => sl.sensorSerialNumber == serialNo && sl.active);
        }
    }
}
