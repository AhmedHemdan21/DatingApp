
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message); // Adding new header called Application-Error
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error"); // Allow Application-Error to be displayed
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}
