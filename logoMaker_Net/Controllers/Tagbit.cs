using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace logoMaker_Net.Controllers
{
    [Authorize]
  //  [Route("Tagbit")]
    public class Tagbit : Controller
    {
        [AllowAnonymous]
        public IActionResult Home()
        {
            return View();
        }
        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult Design()
        {
            return View();
        }
        public IActionResult Sample()
        {
            return View();
        }

        [AllowAnonymous]
        [Route("login")]
        public IActionResult Login()
        {
            var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };
            //var redirecturl = Url.Action("ExternalloginCallback", "Home",
            //    new { returnurl = "" });

            //var properties=SignInManager

            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

  
    }
}
