using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Interfaces
{
    public interface IAdministratorRepository
    {
        List<Administrator> GetAllAdministrators();
        int InsertAdministrator(Administrator a);
        int UpdateAdministrator(Administrator a);
        int DeleteAdministrator(int id);
    }
}
