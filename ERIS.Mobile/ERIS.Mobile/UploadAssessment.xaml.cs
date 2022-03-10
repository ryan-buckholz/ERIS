using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class UploadAssessment : ContentPage
    {
        public UploadAssessment()
        {
            InitializeComponent();
        }

        private void Submit_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Submitted", "Congrats you submitted the assessment!", "OK");
        }
    }
}