using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace logoMaker_Net
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.ConfigureServices(services =>
                    {
                        services.AddControllersWithViews();
                        services.AddAuthentication(options =>
                        {
                            options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                            options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
                        })
                        .AddCookie(options =>
                        {
                            options.LoginPath = "/account/google-login";
                        })
                        .AddGoogle(GoogleDefaults.AuthenticationScheme, options =>
                          //.AddGoogle(options =>
                          {
                            options.ClientId = "200465673513-8i49mo3m24d91o3sgauubqj9jobtncga.apps.googleusercontent.com";
                            options.ClientSecret = "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";
                        });


                    });
                });

    }
}
