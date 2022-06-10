﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class Administrator
    {
        public int adminId { get; set; }
        public string fullName {get; set;}
        public string email { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public bool admin { get; set; }
    }
}
