using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ERISMobileWebAPI.Models;

namespace ERIS.MobileWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentProfilesController : ControllerBase
    {
        private readonly ERISDbContext _context;

        public AssessmentProfilesController(ERISDbContext context)
        {
            _context = context;
        }

        // GET: api/AssessmentProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssessmentProfile>>> GetAssessmentProfiles()
        {
            return await _context.AssessmentProfiles.ToListAsync();
        }

        // GET: api/AssessmentProfiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AssessmentProfile>> GetAssessmentProfile(int id)
        {
            var assessmentProfile = await _context.AssessmentProfiles.FindAsync(id);

            if (assessmentProfile == null)
            {
                return NotFound();
            }

            return assessmentProfile;
        }

        // PUT: api/AssessmentProfiles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssessmentProfile(int id, AssessmentProfile assessmentProfile)
        {
            if (id != assessmentProfile.AssessmentID)
            {
                return BadRequest();
            }

            _context.Entry(assessmentProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssessmentProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AssessmentProfiles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AssessmentProfile>> PostAssessmentProfile(AssessmentProfile assessmentProfile)
        {
            _context.AssessmentProfiles.Add(assessmentProfile);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssessmentProfile", new { id = assessmentProfile.AssessmentID }, assessmentProfile);
        }

        // DELETE: api/AssessmentProfiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssessmentProfile(int id)
        {
            var assessmentProfile = await _context.AssessmentProfiles.FindAsync(id);
            if (assessmentProfile == null)
            {
                return NotFound();
            }

            _context.AssessmentProfiles.Remove(assessmentProfile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssessmentProfileExists(int id)
        {
            return _context.AssessmentProfiles.Any(e => e.AssessmentID == id);
        }
    }
}
