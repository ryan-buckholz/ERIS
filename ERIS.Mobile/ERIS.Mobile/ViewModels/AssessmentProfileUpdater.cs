using ERIS.Mobile.Models;
using ERIS.Mobile.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public abstract class AssessmentProfileUpdater : BindableObject, IObserver<AssessmentProfile>
    {
        private AssessmentProfileSerializer assessmentProfileSerializer;
        protected AssessmentProfile assessmentProfile;
        private AssessmentProfileChangeTracker assessmentProfileChangeTracker;
        private IDisposable unsubscriber;
        public AssessmentProfileUpdater()
        {
            assessmentProfileSerializer = DependencyService.Get<AssessmentProfileSerializer>();
            assessmentProfileChangeTracker = DependencyService.Get<AssessmentProfileChangeTracker>();
            assessmentProfile = assessmentProfileSerializer.DeserializeJsonFileToModel();
            Subscribe(assessmentProfileChangeTracker);
        }

        private void UpdateAssessmentProfileJsonFile()
        {
            assessmentProfileSerializer.SerializeModelToJsonFile(assessmentProfile);
            assessmentProfileChangeTracker.NotifyObservers();
        }

        public void OnCompleted()
        {
        }

        public void OnError(Exception error)
        {
        }

        public void OnNext(AssessmentProfile value)
        {
            assessmentProfile = value;
        }
        public void Subscribe(IObservable<AssessmentProfile> provider)
        {
            unsubscriber = provider.Subscribe(this);
        }
        private void Unsubscribe()
        {
            unsubscriber.Dispose();
        }
    }
}
