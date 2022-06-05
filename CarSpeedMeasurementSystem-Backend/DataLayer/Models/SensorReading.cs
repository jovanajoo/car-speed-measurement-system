using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class SensorReading
    {
        public DateTime timestemp { get; set; }
        public decimal measuredSpeed { get; set; }
        public decimal speeding { get; set; }
        public int sensorSerialNumber { get; set; }
        public int idSensorLocation { get; set; }
    }
}
