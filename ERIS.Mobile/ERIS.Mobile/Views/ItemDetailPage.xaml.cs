using ERIS.Mobile.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace ERIS.Mobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}