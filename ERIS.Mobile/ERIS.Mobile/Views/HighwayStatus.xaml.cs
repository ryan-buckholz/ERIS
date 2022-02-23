using System;
using System.Collections.Generic;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{

    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HighwayStatus : ContentPage
    {
        public HighwayStatus()
        {
            InitializeComponent();
        }

        private void Open_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Shoulder_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Lanes_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void One_Way_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Two_Way_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new MaterialPage());
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {

        }
    }
}
