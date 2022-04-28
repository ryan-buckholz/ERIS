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
using Newtonsoft.Json;
using System.Text.Json;

namespace ERIS.Mobile.Services
{
    public class SendData
    {

        const string jsonFileName = "AssessmentDetails.json";

        public string activeLocalPath;

        static HttpClient client;

        const string BaseUrl = "http://10.0.2.2:50188/api/AssessmentDetails";

        public SendData()
        {
            activeLocalPath = Path.Combine(FileSystem.AppDataDirectory, jsonFileName);

            client = new HttpClient()
            {
                BaseAddress = new Uri(BaseUrl)
            };


        }


        public async void PostDetails()
        {

            Console.WriteLine(activeLocalPath);

            string json = File.ReadAllText(activeLocalPath);

            StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

            try
            {
                var response = await client.PostAsync("api/AssessmentDetails", content);

                int code = (int)response.StatusCode;

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
        
        



    }
}
