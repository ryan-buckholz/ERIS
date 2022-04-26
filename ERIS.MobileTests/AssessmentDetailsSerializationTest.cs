using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using ERIS.Mobile.Models;
using ERIS.Mobile.Services;
using Newtonsoft.Json;

namespace ERIS.MobileTests
{
    [TestClass]
    public class AssessmentDetailsSerializationTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            AssessmentDetails assessmentDetails = new AssessmentDetails();
            string jsonAssessmentDetails = JsonConvert.SerializeObject(assessmentDetails);

            JsonConvert.DeserializeObject<AssessmentDetails>(jsonAssessmentDetails);
            Console.WriteLine(jsonAssessmentDetails);

        }
    }
}
