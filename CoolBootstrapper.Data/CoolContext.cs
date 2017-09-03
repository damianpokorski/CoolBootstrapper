using CoolBootstrapper.Data.Migrations;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoolBootstrapper.Data
{
    public class CoolObject
    {
        public int Id { get; set; }
        public string SampleString { get; set; }
        public DateTime? Date { get; set; }

        public CoolObject()
        {
            Date = DateTime.Now;
        }
    }
    public class CoolContext : DbContext
    {
        private static CoolContext Singleton = null;
        public static CoolContext Get()
        {
            if(Singleton == null) Singleton = new CoolContext();

            return Singleton;
        }
        public CoolContext() : base() {
            Database.SetInitializer(new CoolDatabaseInitialiser());
        }
        public DbSet<CoolObject> CoolObjects { get; set; }
    }
}
