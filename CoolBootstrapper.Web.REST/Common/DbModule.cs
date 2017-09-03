using CoolBootstrapper.Data;
using Nancy;
using System.Linq;
namespace CoolBoostrapper.Web.Modules.Common
{
    public class DbModule : NancyModule
    {

        public DbModule()
        {
            Get["/db"] = parameters =>
            {
                return CoolContext.Get().CoolObjects.ToList().Count().ToString();
            };

            Get["/db/add"] = parameters =>
            {
                CoolContext.Get().CoolObjects.Add(new CoolObject());
                CoolContext.Get().SaveChanges();
                return "Added";
            };

            Get["/db/remove"] = parameters =>
            {
                CoolContext.Get().CoolObjects.Remove(CoolContext.Get().CoolObjects.Last());
                CoolContext.Get().SaveChanges();
                return "Removed";
            };
        }
    }
}