﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MeasurementsPage : ContentPage
    {
        public MeasurementsPage()
        {
            InitializeComponent();
        }

        private void Next_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new UploadAssessment());

        }
    }
}