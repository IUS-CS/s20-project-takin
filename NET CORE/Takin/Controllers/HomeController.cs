using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Takin.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu()
        {
            return View();
        }

        public ActionResult Specials()
        {
            return View();
        }

        public ActionResult Order()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Information about us and our service.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact us with questions or concerns.";
            return View();
        }
    }
}