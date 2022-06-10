CREATE TABLE [dbo].[Administrators] (
    [admin_id]  INT            IDENTITY (1, 1) NOT NULL,
    [full_name] NVARCHAR (50)  NOT NULL,
    [email]     NVARCHAR (30)  NOT NULL,
    [username]  NVARCHAR (20)  NOT NULL,
    [password]  NVARCHAR (MAX) NOT NULL,
    [admin]     BIT            NULL,
    PRIMARY KEY CLUSTERED ([admin_id] ASC),
    UNIQUE NONCLUSTERED ([username] ASC)
);

