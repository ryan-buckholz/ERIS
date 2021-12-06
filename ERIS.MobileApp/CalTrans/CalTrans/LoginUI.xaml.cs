using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySqlConnector;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace CalTrans
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginUI : ContentPage
    {
        public LoginUI()
        {
            InitializeComponent();

        }

        private String server = "Server=10.0.0.252;User ID=yowzal;Password=1109;Database=sakila";
        //protected override void OnAppearing()
        //{
         //   MySqlConnection sql = new MySqlConnection(server);
          //  sql.Open();
           // sql.Close();
        //}

        private void Button_Clicked(object sender, EventArgs e)
        {

            MySqlConnection sql = new MySqlConnection(server);
            sql.Open();

            MySqlCommand cmd = new MySqlCommand("Insert into users (first_name,last_name) values('" + txtUsername.Text + "','" + txtPassword.Text + "')", sql);
            var rd = cmd.ExecuteReaderAsync();

            sql.Close();

            DisplayAlert("Info", "Data something", "OK");
            txtUsername.Text = null;
            txtPassword.Text = null;


            if(txtUsername.Text=="admin" && txtPassword.Text == "123")
            {

                Navigation.PushAsync(new Home());
            }else
            {
                DisplayAlert("Oopsies...", "Username or Password is incorrect!", "Ok");
            }

            Navigation.PushAsync(new DraftsPage());
        }

        private void TapGestureRecognizer_Tapped(object sender, EventArgs e)
        {
            Navigation.PushAsync(new RegisterPage());

        }
    }
}