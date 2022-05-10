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
using Xamarin.Forms;

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
        const int uploadTimeoutSeconds = 10;

        private int assessmentID = 0;

        public SendData()
        {
            detailsActiveLocalPath = Path.Combine(FileSystem.AppDataDirectory, detailsJsonFileName);

            profileActiveLocalPath = Path.Combine(FileSystem.AppDataDirectory, profileJsonFileName);

            client = new HttpClient()
            {
                BaseAddress = new Uri(BaseUrl),
                Timeout = new TimeSpan(0, 0, uploadTimeoutSeconds)
            };
        }
        public async Task UploadAssessmentData()
        {
            try 
            { 
                await PostAssessmentProfile();
                await PostAssessmentDetails();
            }
            catch
            {
                throw;
            }
        }

        public async Task PostAssessmentProfile()
        {
            AssessmentProfile prof = new AssessmentProfile();

            string profileJson = File.ReadAllText(profileActiveLocalPath);

            prof = JsonConvert.DeserializeObject<AssessmentProfile>(profileJson);

            prof.AssessmentStatus = "Not started";

            string profJson = JsonConvert.SerializeObject(prof);

            StringContent content = new StringContent(profJson, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PostAsync("api/AssessmentProfile", content);
                response.EnsureSuccessStatusCode();
                int code = (int)response.StatusCode;

                string body = await response.Content.ReadAsStringAsync();

                AssessmentProfile newJson = JsonConvert.DeserializeObject<AssessmentProfile>(body);

                assessmentID = newJson.AssessmentID;
            }
            catch
            {
                throw;
            }
            
        }

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
                HttpResponseMessage response = await client.PostAsync("api/AssessmentDetails", content);
                response.EnsureSuccessStatusCode();
                int code = (int)response.StatusCode;

                string body = await response.Content.ReadAsStringAsync();
            }
            catch
            {
                throw;
            }
            
        }
    }
}
