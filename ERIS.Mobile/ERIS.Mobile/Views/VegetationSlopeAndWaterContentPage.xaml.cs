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
    public partial class VegetationSlopeAndWaterContentPage : ContentPage
    {
        public VegetationSlopeAndWaterContentPage()
        {
            InitializeComponent();
        }

        private void Dry_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Moist_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Wet_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Flowing_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Seep_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Spring_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
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

        }
    }
}