using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ERISMobileWebAPI.Models
{
    public class ERISDbContext: DbContext
    {
        public ERISDbContext(DbContextOptions<ERISDbContext> options):base(options)
        {

        }
        public DbSet<AssessmentDetails> AssessmentDetails { get; set; }
        public DbSet<AssessmentProfile> AssessmentProfile { get; set; }
        public DbSet<Photo> Photo { get; set; }
        public DbSet<Login> Login { get; set; }
    }
}