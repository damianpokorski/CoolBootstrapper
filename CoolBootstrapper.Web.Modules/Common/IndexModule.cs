using Nancy;

namespace CoolBoostrapper.Web.Modules.Common
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = parameters =>
            {
                return Response.AsRedirect("/index.html");
            };
        }
    }
}