using BookmarkManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookmarkManager.Web.Models
{
    public class AccountViewModel: User
    {
        public string Password { get; set; }
    }
}
