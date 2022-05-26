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
    public class AdministratorBusiness:IAdministratorBusiness
    {
        private readonly IAdministratorRepository administratorRepository;
        public AdministratorBusiness(IAdministratorRepository administratorRepository)
        {
            this.administratorRepository = administratorRepository;
        }
        public List<Administrator> GetAllAdministrators()
        {
            List<Administrator> administrators = this.administratorRepository.GetAllAdministrators();
            return (administrators.Count > 0) ? administrators : null;
        }
        public bool InsertAdministrator(Administrator a)
        {
            return (this.administratorRepository.InsertAdministrator(a) > 0);
        }
        public bool UpdateAdministrator(Administrator a)
        {
            return (this.administratorRepository.UpdateAdministrator(a) > 0);
        }
        public bool DeleteAdministrator(int id)
        {
            return (this.administratorRepository.DeleteAdministrator(id) > 0);
        }
        public Administrator GetAdministratorById(int id)
        {
            return this.administratorRepository.GetAllAdministrators().FirstOrDefault(a => a.adminId == id);
        }

    }
}
