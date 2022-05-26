using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class SensorLocation
    {
        public int entryNo { get; set; }
        public DateTime startDate { get; set; }
        public decimal latitude { get; set; }
        public decimal longitude { get; set; }
        public bool active { get; set; }
        public decimal maxSpeed { get; set; }
        public DateTime endDate { get; set; }
        public string description { get; set; }
        public int sensorSerialNumber { get; set; }
    }
}
