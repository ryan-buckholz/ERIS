using ERIS.Mobile.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xamarin.Forms;

namespace ERIS.Mobile.Services
{
    public class AssessmentProfileChangeTracker
    {
        AssessmentProfileSerializer assessmentProfileSerializer;
        List<IObserver<AssessmentProfile>> observers;
        public AssessmentProfileChangeTracker()
        {
            assessmentProfileSerializer = DependencyService.Get<AssessmentProfileSerializer>();
            observers = new List<IObserver<AssessmentProfile>>();
        }

        public IDisposable Subscribe(IObserver<AssessmentProfile> observer)
        {
            if (!observers.Contains(observer))
                observers.Add(observer);

            return new Unsubscriber(observers, observer);
        }

        private class Unsubscriber : IDisposable
        {
            private List<IObserver<AssessmentProfile>> _observers;
            private IObserver<AssessmentProfile> _observer;

            public Unsubscriber(List<IObserver<AssessmentProfile>> observers, IObserver<AssessmentProfile> observer)
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
            AssessmentProfile assessmentProfile = assessmentProfileSerializer.DeserializeJsonFileToModel();

            foreach (var observer in observers.ToArray())
                observer.OnNext(assessmentProfile);
        }
    }
}
