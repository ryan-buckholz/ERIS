using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;
using ERIS.Mobile.Services;
namespace ERIS.Mobile.ViewModels
{
    public class DataStore
    {
        private SendData send;
        public ICommand checkSubmitButton { get; }
        public DataStore()
        {
            checkSubmitButton = new Command(SubmitPressed);

            send = new SendData();

        }

        private void SubmitPressed()
        {
            send.PostDetails();
        }

    }
}
