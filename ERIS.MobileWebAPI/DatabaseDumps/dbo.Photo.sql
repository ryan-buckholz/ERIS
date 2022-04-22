CREATE TABLE [dbo].[Photo] (
    [PhotoId]                INT           NOT NULL,
    [AssessmentId]           INT           NULL,
    [FilePath]               VARCHAR (100) NULL,
    [AssociatedMeasurement] VARCHAR (20)  NULL,
    PRIMARY KEY CLUSTERED ([PhotoId] ASC),
    CONSTRAINT [FK_Photo_AssessmentId] FOREIGN KEY ([AssessmentId]) REFERENCES [dbo].[AssessmentProfile] ([AssessmentId])
);

