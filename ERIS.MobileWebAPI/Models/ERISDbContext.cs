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
        public DbSet<AssessmentProfile> AssessmentProfiles { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}