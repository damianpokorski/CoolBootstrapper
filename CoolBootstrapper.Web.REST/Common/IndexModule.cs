using Nancy;

namespace CoolBoostrapper.Web.Modules.Common
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/public"] = parameters =>
            {
                return Response.AsRedirect("public/index.html");
            };
        }
    }
}