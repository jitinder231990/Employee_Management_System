using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using core_api.Models;

namespace core_api.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly EmpDbContext _context;

        public UserController(EmpDbContext context)
        {
            _context = context;
        }
        // GET: api/Movies
        //[HttpGet]
        //[Route("get-users")]
        //public async Task<ActionResult<IEnumerable<Employee>>> GetUsers()
        //{
        //    return await _context.Users.ToListAsync();
        //}

        //[HttpGet]
        //[Route("get-login")]
        //public async Task<ActionResult<List<Login>>> GetLogin()
        //{
        //    return await _context.Login.Where(x => x.Id == 1).ToListAsync();
        //}

        //// GET: api/Movies/5

        //[HttpGet]
        //[Route("get-user-by-id")]
        //public async Task<ActionResult<Employee>> GetUserByID(int id)
        //{
        //    var user = await _context.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }
        //    return user;
        //}

    }

}