using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Interfaces
{
    public interface IAdministratorBusiness
    {
        List<Administrator> GetAllAdministrators();
        bool InsertAdministrator(Administrator a);
        bool UpdateAdministrator(Administrator a);
        bool DeleteAdministrator(int id);
        Administrator GetAdministratorById(int id);
    }
}
