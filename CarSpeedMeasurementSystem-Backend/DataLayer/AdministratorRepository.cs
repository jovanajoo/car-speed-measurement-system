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
    public class AdministratorRepository:IAdministratorRepository
    {
        public List<Administrator> GetAllAdministrators()
        {
            List<Administrator> listOfAdministrators = new List<Administrator>();
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "SELECT * FROM Administrators";

                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                while (sqlDataReader.Read())
                {
                    Administrator a = new Administrator();
                    a.adminId = sqlDataReader.GetInt32(0);
                    a.fullName = sqlDataReader.GetString(1);
                    a.email = sqlDataReader.GetString(2);
                    a.username = sqlDataReader.GetString(3);
                    a.password = sqlDataReader.GetString(4);
                    a.admin = sqlDataReader.GetBoolean(5);
                    listOfAdministrators.Add(a);
                }
            }
            return listOfAdministrators;
        }
        public int InsertAdministrator(Administrator a)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("INSERT INTO Administrators VALUES('{0}', '{1}', '{2}', '{3}','{4}')", a.fullName, a.email, a.username, a.password,a.admin);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int UpdateAdministrator(Administrator a)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("UPDATE Administrators SET full_name = '{0}', email = '{1}', username = '{2}', password = '{3}', admin = '{4}' WHERE admin_id = {5}", a.fullName, a.email, a.username, a.password,a.admin, a.adminId);

                return sqlCommand.ExecuteNonQuery();
            }
        }
        public int DeleteAdministrator(int id)
        {
            using (SqlConnection sqlConnection = new SqlConnection(Constants.connectionString))
            {
                sqlConnection.Open();
                SqlCommand sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = string.Format("DELETE FROM Administrators WHERE admin_id = {0}", id);

                return sqlCommand.ExecuteNonQuery();
            }
        }

    }
}
