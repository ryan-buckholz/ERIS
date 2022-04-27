using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Xamarin.Essentials;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GeneralReportInfoPart2Page : ContentPage
    {
        public GeneralReportInfoPart2Page()
        {
            InitializeComponent();
            LastN.Text = Preferences.Get("LastNameText", String.Empty);
            FirstN.Text = Preferences.Get("FirstNText", String.Empty);
            Snumber.Text = Preferences.Get("SnumberText", String.Empty);
        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart3Page));
        }

        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart1Page));
        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Set("LastNameText", LastN.Text);
            Preferences.Set("FirstNText", FirstN.Text);
            Preferences.Set("SnumberText", Snumber.Text);
        }

        private void Clear_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Clear();
        }
    }
}