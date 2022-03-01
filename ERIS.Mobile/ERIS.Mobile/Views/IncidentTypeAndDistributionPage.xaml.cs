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
    public partial class IncidentTypeAndDistributionPage : ContentPage
    {
        public IncidentTypeAndDistributionPage()
        {
            InitializeComponent();
        }

        private void RockFallCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ToppleCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SlideCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SpreadCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void FlowCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void CompoundCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ErosionCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SurfacialSloughingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ScouredToeCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void WashoutCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void AdvancingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void RetrogressingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void EnlargingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void WideningCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void MovingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ConfinedCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(HighwayStatus));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart3Page));
        }
    }
}