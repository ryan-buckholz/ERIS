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
    public partial class RecommendedFollowupActionsP1 : ContentPage
    {
        public RecommendedFollowupActionsP1()
        {
            InitializeComponent();
        }
        private void Open_Highway_Traffic_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Open_Highway_Shoulder_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Dewater_With_Horizontal_Drains_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Construct_Temp_Shoring_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Buttress_Toe_of_Landslide_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Place_Rock_Protection_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Routine_Visual_Monitor_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Recon_Slope_To_Original_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedFollowupActionsP2));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedImmediateActionsP2));
        }
    }
}