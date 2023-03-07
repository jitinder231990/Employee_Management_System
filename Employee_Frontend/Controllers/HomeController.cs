using Employee_Frontend.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Text;

namespace Employee_Frontend.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index()
        {
            List<EmployeeModel> employeeList = new List<EmployeeModel>();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:7165/api/Employees/get-employees"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    employeeList = JsonConvert.DeserializeObject<List<EmployeeModel>>(apiResponse);
                }
            }
            return View(employeeList);
        }

        public ViewResult AddEmployee() => View();

        [HttpPost]
        public async Task<IActionResult> AddEmployee(EmployeeModel employee)
        {
            EmployeeModel _employee = new EmployeeModel();
            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(employee), Encoding.UTF8, "application/json");

                using (var response = await httpClient.PostAsync("https://localhost:7165/api/Employees/create-employee", content))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    _employee = JsonConvert.DeserializeObject<EmployeeModel>(apiResponse);
                }
            }
            return View(_employee);
        }

        public async Task<IActionResult> UpdateEmployee(int id)
        {
            EmployeeModel _employee = new EmployeeModel();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:7165/api/Employees/get-employee-by-id?id=" + id))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    _employee = JsonConvert.DeserializeObject<EmployeeModel>(apiResponse);
                }
            }
            return View(_employee);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateEmployee(EmployeeModel employee)
        {
            EmployeeModel _employee = new EmployeeModel();
            using (var httpClient = new HttpClient())
            {
               
                StringContent content = new StringContent(JsonConvert.SerializeObject(employee), Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync("https://localhost:7165/api/Employees/edit-employee?id=" + employee.Id, content))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    ViewBag.Result = "Success";
                    _employee = JsonConvert.DeserializeObject<EmployeeModel>(apiResponse);
                }
            }
            return View(_employee);
        }
        [HttpPost]
        public async Task<IActionResult> DeleteEmployee(int EmployeeId)
        {
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.PostAsync("https://localhost:7165/api/Employees/delete-employee?id=" + EmployeeId , null))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                }
            }

            return RedirectToAction("Index");
        }
    }
}