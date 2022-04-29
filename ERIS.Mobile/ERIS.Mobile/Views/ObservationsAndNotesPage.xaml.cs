using ERIS.Mobile.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ObservationsAndNotesPage : ContentPage
    {
        public ObservationsAndNotesPage()
        {
            InitializeComponent();
            BindingContext = new ObservationsAndNotesViewModel();
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedFollowupActionsP2));
        }

        private void Submit_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Submitted", "Congrats you submitted the assessment!", "OK");
        }
    }
}