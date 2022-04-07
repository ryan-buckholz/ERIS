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
    public class AssessmentDetailsController : ControllerBase
    {
        private readonly ERISDbContext _context;

        public AssessmentDetailsController(ERISDbContext context)
        {
            _context = context;
        }

        // GET: api/AssessmentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssessmentDetails>>> GetAssessmentDetails()
        {
            return await _context.AssessmentDetails.ToListAsync();
        }

        // GET: api/AssessmentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AssessmentDetails>> GetAssessmentDetails(int id)
        {
            var assessmentDetails = await _context.AssessmentDetails.FindAsync(id);

            if (assessmentDetails == null)
            {
                return NotFound();
            }

            return assessmentDetails;
        }

        // PUT: api/AssessmentDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssessmentDetails(int id, AssessmentDetails assessmentDetails)
        {
            if (id != assessmentDetails.AssessmentDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(assessmentDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssessmentDetailsExists(id))
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

        // POST: api/AssessmentDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AssessmentDetails>> PostAssessmentDetails(AssessmentDetails assessmentDetails)
        {
            _context.AssessmentDetails.Add(assessmentDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssessmentDetails", new { id = assessmentDetails.AssessmentDetailsID }, assessmentDetails);
        }

        // DELETE: api/AssessmentDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssessmentDetails(int id)
        {
            var assessmentDetails = await _context.AssessmentDetails.FindAsync(id);
            if (assessmentDetails == null)
            {
                return NotFound();
            }

            _context.AssessmentDetails.Remove(assessmentDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssessmentDetailsExists(int id)
        {
            return _context.AssessmentDetails.Any(e => e.AssessmentDetailsID == id);
        }
    }
}
