using ERIS.Mobile.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient.Memcached;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using System.Text.Json;

namespace ERIS.Mobile.Services
{
    public class SendData
    {

        const string detailsJsonFileName = "AssessmentDetails.json";

        const string profileJsonFileName = "AssessmentProfile.json";

        public string detailsActiveLocalPath;

        public string profileActiveLocalPath;

        static HttpClient client;

        const string BaseUrl = "http://10.0.2.2:5000/";

        private int assessmentID = 0;

        public SendData()
        {
            detailsActiveLocalPath = Path.Combine(FileSystem.AppDataDirectory, detailsJsonFileName);

            profileActiveLocalPath = Path.Combine(FileSystem.AppDataDirectory, profileJsonFileName);

            client = new HttpClient()
            {
                BaseAddress = new Uri(BaseUrl)
            };


        }

        /*
         * POST details using swagger
         * 
         */
        public async Task PostAssessmentDetails()
        {

            AssessmentDetails details = new AssessmentDetails();

            string detailsJson = File.ReadAllText(detailsActiveLocalPath);

            details = JsonConvert.DeserializeObject<AssessmentDetails>(detailsJson);

            details.AssessmentID = assessmentID;

            string detJson = JsonConvert.SerializeObject(details);

            StringContent content = new StringContent(detJson, Encoding.UTF8, "application/json");

            try
            {
                var response = await client.PostAsync("api/AssessmentDetails", content);

                int code = (int)response.StatusCode;

                string body = await response.Content.ReadAsStringAsync();

                Console.WriteLine(code);
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Details Posted");
                }
                else
                {
                    Console.WriteLine("Not posted");
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        /*
         * POST profile using swagger
         * 
         */
        public async Task PostAssessmentProfile()
        {
            AssessmentProfile prof = new AssessmentProfile();

            string profileJson = File.ReadAllText(profileActiveLocalPath);

            prof = JsonConvert.DeserializeObject<AssessmentProfile>(profileJson);

            prof.AssessmentStatus = "Not started";

            prof.ProjectID = "11";

            string profJson = JsonConvert.SerializeObject(prof);

            StringContent content = new StringContent(profJson, Encoding.UTF8, "application/json");

            try
            {
                var response = await client.PostAsync("api/AssessmentProfile", content);

                int code = (int)response.StatusCode;

                string body = await response.Content.ReadAsStringAsync();

                AssessmentProfile newJson = JsonConvert.DeserializeObject<AssessmentProfile>(body);

                assessmentID = newJson.AssessmentID;

                Console.WriteLine(code);
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Details Posted");
                }
                else
                {
                    Console.WriteLine("Not posted");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }


        }
    }
}
