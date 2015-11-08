using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using YleanaknockoutMVC.Models;

namespace YleanaknockoutMVC.Controllers
{
    public class CustomerController : Controller
    {
        private YleanaCodingExerciseEntities db = new YleanaCodingExerciseEntities();

      
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult ListCustomers()
        {
            return View();

        }

        [HttpGet]
        public JsonResult GetCustomers()
        {
            return Json(db.Customers.ToList(), JsonRequestBehavior.AllowGet);

        }


        // GET: /Customer/Create

        public ActionResult Create()
        {
            return View();
        }

    
        [HttpPost]
        public JsonResult Create(Customer customer)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Customers.Add(customer);
                    db.SaveChanges();

                    return Json(new { Status = string.Format("Success") });
                }
                catch (Exception ex)
                {
                    throw ex;
                    //return Json(new { Status = string.Format("failure") });
                }
            }
            else
            {
                return Json(new { Status = string.Format("failure") });
            }
        }

      

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}