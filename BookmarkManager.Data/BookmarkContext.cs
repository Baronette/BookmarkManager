using Microsoft.EntityFrameworkCore;


namespace BookmarkManager.Data
{
    public class BookmarkContext : DbContext
    {
        private readonly string _connection;

        public BookmarkContext(string connection)
        {
            _connection = connection;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connection);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Bookmark> Bookmarks { get; set; }
    }
}
