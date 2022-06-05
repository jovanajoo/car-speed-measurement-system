CREATE TABLE [dbo].[Sensor_Locations] (
    [entry_no]             INT              IDENTITY (1, 1) NOT NULL,
    [start_date]           DATE             NOT NULL,
    [latitude]             DECIMAL (28, 20) NOT NULL,
    [longitude]            DECIMAL (28, 20) NOT NULL,
    [active]               BIT              NOT NULL,
    [max_speed]            DECIMAL (18, 2)  NOT NULL,
    [end_date]             DATE             NULL,
    [description]          NVARCHAR (MAX)   NULL DEFAULT '',
    [sensor_serial_number] INT              NOT NULL,
    CONSTRAINT [pk_sensor] PRIMARY KEY CLUSTERED ([entry_no] ASC, [sensor_serial_number] ASC),
    CONSTRAINT [fk_sensor_serial_number] FOREIGN KEY ([sensor_serial_number]) REFERENCES [dbo].[Sensors] ([serial_no])
);

