CREATE TABLE [dbo].[Administrators] (
    [admin_id]  INT            NOT NULL IDENTITY,
    [full_name] NVARCHAR (50)  NOT NULL,
    [email]     NVARCHAR (30)  NOT NULL,
    [username]  NVARCHAR (20)  NOT NULL,
    [password]  NVARCHAR (MAX) NOT NULL,
    PRIMARY KEY CLUSTERED ([admin_id] ASC)
);

