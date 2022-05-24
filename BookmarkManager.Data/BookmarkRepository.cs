using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BookmarkManager.Data
{
    public partial class BookmarkRepository
    {
        private readonly string _connection;

        public BookmarkRepository(string connection)
        {
            _connection = connection;
        }
        public void AddBookmark(Bookmark bookmark)
        {
            using var context = new BookmarkContext(_connection);
            context.Bookmarks.Add(bookmark);
            context.SaveChanges();
        }
        public List<Bookmark> GetAll(int id)
        {
            using var context = new BookmarkContext(_connection);
            return context.Bookmarks.Where(b => b.UserId == id).ToList();
        }
        public void Delete(int id)
        {
            using var context = new BookmarkContext(_connection);
            context.Bookmarks.Remove(context.Bookmarks.FirstOrDefault(b => b.Id == id));
            context.SaveChanges();
        }
        public void Update(Bookmark bookmark)
        {
            using var context = new BookmarkContext(_connection);
            context.Database.ExecuteSqlInterpolated($"UPDATE Bookmarks SET Title = {bookmark.Title} WHERE Id = {bookmark.Id}");
        }
        public List<TopBookmark> GetTop()
        {
            using var context = new BookmarkContext(_connection);
            return context.Bookmarks.GroupBy(b => b.Url).Select(b => new TopBookmark
            {
                Url = b.Key,
                Count = b.Count()
            }).OrderByDescending(b => b.Count).Take(5).ToList();
        }
    }
}
