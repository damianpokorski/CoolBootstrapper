using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
namespace Nancy.CSharp.SelfHostWithRazor
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);
            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("/","public")
            );
        }
    }
}