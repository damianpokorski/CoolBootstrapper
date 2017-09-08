using System;
using Nancy.Hosting.Self;

namespace Nancy.CSharp.SelfHostWithRazor
{
    class Program
    {
        static void Main(string[] args)
        {
            StaticConfiguration.EnableRequestTracing = true;
            var HostURL = "http://localhost:3579";
            var uri = new Uri(HostURL);

            // Disable caching
            StaticConfiguration.Caching.EnableRuntimeViewDiscovery = true;
            StaticConfiguration.Caching.EnableRuntimeViewUpdates = true;

            using (var host = new NancyHost(uri))
            {
                //System.Diagnostics.Process.Start(HostURL);
                host.Start();

                Console.WriteLine("Your application is running on " + uri);
                Console.WriteLine("Press any [Enter] to close the host.");
                Console.ReadLine();
            }
        }
    }
}
