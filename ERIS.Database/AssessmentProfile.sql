CREATE TABLE [dbo].[AssessmentProfile] (
    [AssessmentID]             INT            IDENTITY (1, 1) NOT NULL,
    [Date]                     DATETIME2 (7)  NOT NULL,
    [District]                 NVARCHAR (20) NULL,
    [County]                   NVARCHAR (20) NULL,
    [Route]                    NVARCHAR (20) NULL,
    [PostMile]                 INT            NOT NULL,
    [EA]                       NVARCHAR (10) NULL,
    [ProjectID]                NVARCHAR (10) NULL,
    [DateIncidentReported]     DATETIME2 (7)  NOT NULL,
    [Latitude]                 NVARCHAR (45) NULL,
    [Longitude]                NVARCHAR (45) NULL,
    [LastName]                 NVARCHAR (50) NULL,
    [FirstName]                NVARCHAR (50) NULL,
    [SNumber]                  NVARCHAR (10) NULL,
    [DistrictContactLastName]  NVARCHAR (50) NULL,
    [DistrictContactFirstName] NVARCHAR (50) NULL,
    [DistrictContactSNumber]   NVARCHAR (10) NULL,
    [DistrictContactPhone]     NVARCHAR (20) NULL,
    [DistrictContactCellPhone] NVARCHAR (20) NULL,
    [AssessmentStatus]         VARCHAR (30) NOT NULL DEFAULT 'Not started',
    [Notes]                    NVARCHAR (MAX) NULL,
    [IsUploaded]               BIT            NOT NULL,
    CONSTRAINT [chk_Status] CHECK (AssessmentStatus IN('Not started', 'Working', 'Completed')),
    CONSTRAINT [PK_AssessmentProfile] PRIMARY KEY CLUSTERED ([AssessmentID] ASC) 
);