using CoolBootstrapper.Data.Migrations;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoolBootstrapper.Data
{
    class CoolDatabaseInitialiser : MigrateDatabaseToLatestVersion<CoolContext, CoolMigrationConfiguration>
    {
        public CoolDatabaseInitialiser()
        {
            
        }
    }
}
