﻿using BusinessLayer.Interfaces;
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
    public class SensorBusiness:ISensorBusiness
    {
        private readonly ISensorRepository sensorRepository;
        public SensorBusiness(ISensorRepository sensorRepository)
        {
            this.sensorRepository = sensorRepository;
        }
        public List<Sensor> GetAllSensors()
        {
            List<Sensor> sensors = this.sensorRepository.GetAllSensors();
            return (sensors.Count > 0) ? sensors : null;
        }
        public bool InsertSensor(Sensor s)
        {
            return (this.sensorRepository.InsertSensor(s) > 0);
        }
        public bool UpdateSensor(Sensor s)
        {
            return (this.sensorRepository.UpdateSensor(s) > 0);
        }
        public bool DeleteSensor(int serial_no)
        {
            return (this.sensorRepository.DeleteSensor(serial_no) > 0);
        }
        public Sensor GetSensorBySerialNumber(int serialNo)
        {
            return this.sensorRepository.GetAllSensors().FirstOrDefault(s => s.serialNo == serialNo);
        }
    }
}
