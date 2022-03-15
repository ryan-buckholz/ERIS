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
    public partial class RecommendedFollowupActionsP2 : ContentPage
    {
        public RecommendedFollowupActionsP2()
        {
            InitializeComponent();
        }
        private void Recon_Slope_Geo_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Repair_Culvert_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Install_Erosion_Control_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Survey_Site_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Perform_Geo_Mapping_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Perform_Subsurface_Exploration_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Perform_Detailed_Design_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(MaterialPage));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedFollowupActionsP1));
        }
    }
}