using ERIS.Mobile.Services;
using ERIS.Mobile.Views;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();
            MainPage = new AppShell();
        }

        protected override void OnStart()
        {
            //this line was used for the mx manual
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
