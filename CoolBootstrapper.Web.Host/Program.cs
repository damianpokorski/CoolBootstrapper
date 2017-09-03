﻿using System;
using Nancy.Hosting.Self;

namespace Nancy.CSharp.SelfHostWithRazor
{
    class Program
    {
        static void Main(string[] args)
        {
            StaticConfiguration.EnableRequestTracing = true;
            var uri = new Uri("http://localhost:3579");
            using (var host = new NancyHost(uri))
            {

                host.Start();

                Console.WriteLine("Your application is running on " + uri);
                Console.WriteLine("Press any [Enter] to close the host.");
                Console.ReadLine();
            }
        }
    }
}