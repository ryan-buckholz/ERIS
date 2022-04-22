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
    public partial class RecommendedImmediateActionsP1 : ContentPage
    {
        public RecommendedImmediateActionsP1()
        {
            InitializeComponent();
            BindingContext = new RecommendedImmediateActionsP1ViewModel();
        }

        private void Open_Highway_Traffic_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Open_Highway_Shoulder_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Close_Highway_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void One_Direction_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Both_Directions_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Remove_Landslide_Debris_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Place_KRail_Or_Fence_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Cover_Slope_With_Plastic_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Divert_Surface_Water_Runoff_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Remove_Culvert_Blockage_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedImmediateActionsP2));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(HighwayStatus));

        }
    }
}