using Nancy;

namespace CoolBoostrapper.Web.Modules.Common
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = parameters =>
            {
                return Response.AsFile("public/index.html", "text/html");
            };
        }
    }
}