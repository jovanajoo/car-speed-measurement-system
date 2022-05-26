using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class SensorLocationsRepository
    {
        public List<Sensor_Location> GetAllSensorLocations()
        {
            List<Sensor_Location> listOfSensorLocations = new List<Sensor_Location>();
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "SELECT * FROM Sensor_locations";

                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                while (sqlDataReader.Read())
                {
                    Sensor_Location l = new Sensor_Location();
                    l.entryNo = sqlDataReader.GetInt32(0);
                    l.startDate = sqlDataReader.GetDateTime(1);
                    l.latitude = sqlDataReader.GetDecimal(2);
                    l.longitude = sqlDataReader.GetDecimal(3);
                    l.active = sqlDataReader.GetBoolean(4);
                    l.maxSpeed = sqlDataReader.GetDecimal(5);
                    l.endDate = sqlDataReader.GetDateTime(6);
                    l.description = sqlDataReader.GetString(7);
                    l.sensorSerialNumber = sqlDataReader.GetInt32(8);

                    listOfSensorLocations.Add(l);
                }
            }
            return listOfSensorLocations;
        }
        public int InsertSensorLocation(Sensor_Location l)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("INSERT INTO Sensor_locations VALUES('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}')", l.startDate, l.latitude, l.longitude, l.active, l.maxSpeed, l.endDate, l.description, l.sensorSerialNumber);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int UpdateSensorLocation(Sensor_Location l)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("UPDATE Sensor_locations SET start_date = '{0}', latitude = {1}, longitude = {2}, active = '{3}', max_speed = '{4}', end_date = '{5}', description = '{6}', sensor_serial_number = '{7}' WHERE entry_no = {8}", l.startDate, l.latitude, l.longitude, l.active, l.maxSpeed, l.endDate, l.description, l.sensorSerialNumber, l.entryNo);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int DeleteSensorLocation(int id)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("DELETE FROM Sensor_locations WHERE entry_no = {0}", id);

                return sqlCommand.ExecuteNonQuery();
            }
        }
    }
}
