CREATE TABLE [dbo].[Photo] (
    [PhotoID]               INT            IDENTITY (1, 1) NOT NULL,
    [AssessmentID]          INT            NOT NULL,
    [FilePath]              NVARCHAR (MAX) NULL,
    [AssociatedMeasurement] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Photo] PRIMARY KEY CLUSTERED ([PhotoID] ASC)
);

