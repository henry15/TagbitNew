using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
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
    [AllowAnonymous, Route("account")]
    public class AccountController : Controller
    {
        [Route("google-login")]
        public IActionResult GoogleLogin()
        {

            var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };
          //  var a= HttpContext;
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);

            //await HttpContext.ChallengeAsync(GoogleDefaults.AuthenticationScheme, new AuthenticationProperties()
            //{
            //    RedirectUri = Url.Action("GoogleResponse")
            //});
        }

        [Route("google-response")]
        public IActionResult GoogleResponse()
        {

            return RedirectToAction("Dashboard", "Tagbit");
            //return Json("");
        }


        //[AllowAnonymous]
        //[Route("logout")]
        //public ActionResult Logout()
        //{
        //    HttpContext.SignOutAsync();
        //    return RedirectToAction("Home", "Tagbit");
        //}

        [AllowAnonymous]
        [Route("logout")]
        public IActionResult Logout()
        {
            // HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
            // HttpContext.SignOutAsync(GoogleDefaults.AuthenticationScheme);
            HttpContext.SignOutAsync();
            //  await HttpContext.SignOutAsync(GoogleDefaults.AuthenticationScheme);
            //SignOut(GoogleDefaults.AuthenticationScheme);
            return RedirectToAction("Home", "Tagbit");
            //var callbackUrl = Url.Action("Home", "Tagbit", null, protocol: Request.Scheme);
            //var signout = SignOut(new AuthenticationProperties { RedirectUri = callbackUrl },
            //    CookieAuthenticationDefaults.AuthenticationScheme);

          //  return signout;
        }
    }
}
