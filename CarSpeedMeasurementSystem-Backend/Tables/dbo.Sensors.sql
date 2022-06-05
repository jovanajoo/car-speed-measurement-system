CREATE TABLE [dbo].[Sensors] (
    [serial_no]   INT            NOT NULL,
    [model]       NVARCHAR (50)  NOT NULL,
    [description] NVARCHAR (MAX) NULL,
    PRIMARY KEY CLUSTERED ([serial_no] ASC)
);

