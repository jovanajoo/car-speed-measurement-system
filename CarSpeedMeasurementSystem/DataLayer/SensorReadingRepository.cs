using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class SensorReadingRepository
    {
        public List<Sensor_Reading> GetAllSensorReadings()
        {
            List<Sensor_Reading> listOfSensorReadings = new List<Sensor_Reading>();
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "SELECT * FROM Sensor_Readings";

                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                while (sqlDataReader.Read())
                {
                    Sensor_Reading r = new Sensor_Reading();
                    r.timestemp = sqlDataReader.GetDateTime(0);
                    r.measuredSpeed = sqlDataReader.GetDecimal(1);
                    r.speeding = sqlDataReader.GetDecimal(2);
                    r.sensorSerialNumber = sqlDataReader.GetInt32(3);
                    r.idSensorLocation = sqlDataReader.GetInt32(4);
                    listOfSensorReadings.Add(r);
                }
            }
            return listOfSensorReadings;
        }
        public int InsertSensorReading(Sensor_Reading r)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("INSERT INTO Sensor_Readings VALUES('{0}', {1}, {2}, {3}, {4})", r.timestemp, r.measuredSpeed, r.speeding, r.sensorSerialNumber, r.idSensorLocation);

                return sqlCommand.ExecuteNonQuery();
            }
        }
    }
}
