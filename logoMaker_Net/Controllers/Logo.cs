using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace logoMaker_Net.Controllers
{
    public class Logo : Controller
    {
        public IActionResult Home()
        {
            return View();
        }
        public IActionResult CustomOrders()
        {
            return View();
        }

        public IActionResult Cashout()
        {
            return View();
        }

        public IActionResult Pricing()
        {
            return View();
        }
        public IActionResult Shipping()
        {
            return View();
        }
        public IActionResult Return()
        {
            return View();
        }
        public IActionResult Cancel()
        {
            return View();
        }
        public IActionResult Reports()
        {
            return View();
        }
        public IActionResult Transactions()
        {
            return View();
        }
        public IActionResult Invoice()
        {
            return View();
        }
        public IActionResult Users()
        {
            return View();
        }

        public IActionResult ListProduct()
        {
            return View();
        }

        public IActionResult AddProduct()
        {
            return View();
        }

        public IActionResult ListCategories()
        {
            return View();
        }
        public IActionResult ListVendors()
        {
            return View();
        }
    }
}
