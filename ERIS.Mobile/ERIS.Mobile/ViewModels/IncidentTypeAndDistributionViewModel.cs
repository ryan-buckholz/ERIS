namespace ERIS.Mobile.ViewModels
{
    public class IncidentTypeAndDistributionViewModel : AssessmentDetailsUpdater
    {
        public bool IsFall
        {
            get { return assessmentDetails.IsFall; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFall), value); }
        }
        public bool IsTopple 
        {
            get { return assessmentDetails.IsTopple; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsTopple), value); }
        }
        public bool IsSlide 
        {
            get { return assessmentDetails.IsSlide; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSlide), value); }
        }
        public bool IsSpread 
        {
            get { return assessmentDetails.IsSpread; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSpread), value); }
        }
        public bool IsFlow 
        {
            get { return assessmentDetails.IsFlow; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFlow), value); }
        }
        public bool IsCompound 
        {
            get { return assessmentDetails.IsCompound; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsCompound), value); }
        }
        public bool IsErosion 
        {
            get { return assessmentDetails.IsErosion; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsErosion), value); }
        }
        public bool IsSurfacialSloughing 
        {
            get { return assessmentDetails.IsSurfacialSloughing; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSurfacialSloughing), value); }
        }
        public bool IsScouredToe 
        {
            get { return assessmentDetails.IsScouredToe; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsScouredToe), value); }
        }
        public bool IsWashout 
        {
            get { return assessmentDetails.IsWashout; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsWashout), value); }
        }
        public bool IsAdvancing 
        {
            get { return assessmentDetails.IsAdvancing; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsAdvancing), value); }
        }
        public bool IsRetrogressing 
        {
            get { return assessmentDetails.IsRetrogressing; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsRetrogressing), value); }
        }
        public bool IsEnlarging 
        {
            get { return assessmentDetails.IsEnlarging; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsEnlarging), value); }
        }
        public bool IsWidening 
        {
            get { return assessmentDetails.IsWidening; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsWidening), value); }
        }
        public bool IsMoving 
        {
            get { return assessmentDetails.IsMoving; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsMoving), value); }
        }
        public bool IsConfined
        {
            get { return assessmentDetails.IsConfined; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsConfined), value); }
        }
    }
}
