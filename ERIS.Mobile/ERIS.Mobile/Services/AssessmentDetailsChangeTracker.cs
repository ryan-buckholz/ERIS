using System;
using System.Collections.Generic;
using System.Text;
using ERIS.Mobile.Models;
using Xamarin.Forms;
using ERIS.Mobile.Services;

[assembly: Dependency(typeof(AssessmentDetailsChangeTracker))]
namespace ERIS.Mobile.Services
{
    public class AssessmentDetailsChangeTracker : IObservable<AssessmentDetails>
    {
        AssessmentDetailsSerializer assessmentDetailsSerializer;
        List<IObserver<AssessmentDetails>> observers;
        public AssessmentDetailsChangeTracker()
        {
            assessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
            observers = new List<IObserver<AssessmentDetails>>();
        }

        public IDisposable Subscribe(IObserver<AssessmentDetails> observer)
        {
            if (!observers.Contains(observer))
                observers.Add(observer);

            return new Unsubscriber(observers, observer);
        }

        private class Unsubscriber : IDisposable
        {
            private List<IObserver<AssessmentDetails>> _observers;
            private IObserver<AssessmentDetails> _observer;

            public Unsubscriber(List<IObserver<AssessmentDetails>> observers, IObserver<AssessmentDetails> observer)
            {
                this._observers = observers;
                this._observer = observer;
            }

            public void Dispose()
            {
                if (!(_observer == null)) _observers.Remove(_observer);
            }
        }
        public void NotifyObservers()
        {
            AssessmentDetails assessmentDetails = assessmentDetailsSerializer.DeserializeJsonFileToModel();

            foreach (var observer in observers.ToArray())
                observer.OnNext(assessmentDetails);
        }
    }
}
