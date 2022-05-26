using DataLayer.Interfaces;
using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class SensorRepository:ISensorRepository
    {
        public List<Sensor> GetAllSensors()
        {
            List<Sensor> listOfSensors = new List<Sensor>();
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "SELECT * FROM Sensors";

                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                while (sqlDataReader.Read())
                {
                    Sensor s = new Sensor();
                    s.serialNo = sqlDataReader.GetInt32(0);
                    s.model = sqlDataReader.GetString(1);
                    s.description = sqlDataReader.GetString(2);
                    listOfSensors.Add(s);
                }
            }
            return listOfSensors;
        }
        public int InsertSensor(Sensor s)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("INSERT INTO Sensors VALUES({0}, '{1}', '{2}')", s.serialNo, s.model, s.description);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int UpdateSensor(Sensor s)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("UPDATE Sensors SET model = '{0}', description = '{1}' WHERE serial_no = {2}", s.model, s.description, s.serialNo);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int DeleteSensor(int serial_no)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("DELETE FROM Sensors WHERE serial_no = {0}", serial_no);

                return sqlCommand.ExecuteNonQuery();
            }
        }
    }
}
