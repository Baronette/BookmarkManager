using BookmarkManager.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookmarkManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly string _connection;
        public BookmarksController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("ConStr");
        }
        [Authorize]
        [HttpPost]
        [Route("addbookmark")]
        public void AddBookmark(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connection);
            repo.AddBookmark(bookmark);
        }
        [Authorize]
        [HttpGet]
        [Route("getall")]
        public List<Bookmark> GetAll()
        {
            var accountRepo = new AccountRepository(_connection);
            var user = accountRepo.GetUser(User.Identity.Name);
            var repo = new BookmarkRepository(_connection);
            return repo.GetAll(user.Id);
        }
        [Authorize]
        [HttpPost]
        [Route("delete")]
        public void Delete(int id)
        {
            var repo = new BookmarkRepository(_connection);
            repo.Delete(id);
        }
        [Authorize]
        [HttpPost]
        [Route("update")]
        public void Update(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connection);
            repo.Update(bookmark);
        }
        [HttpGet]
        [Route("gettop")]
        public List<TopBookmark> GetTop()
        {
            var repo = new BookmarkRepository(_connection);
            return repo.GetTop();
        }

    }
}
