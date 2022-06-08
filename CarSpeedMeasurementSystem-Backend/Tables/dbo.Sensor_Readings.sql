CREATE TABLE [dbo].[Sensor_Readings] (
    [timestemp]          TIMESTAMP      NOT NULL,
    [measured_speed]     DECIMAL (18, 2) NOT NULL,
    [speeding]           BIT NOT NULL,
    [sensors_serial_no]  INT             NOT NULL,
    [id_sensor_location] INT             NOT NULL,
    CONSTRAINT [pk_sensor_readings] PRIMARY KEY CLUSTERED ([timestemp] ASC, [sensors_serial_no] ASC, [id_sensor_location] ASC),
    CONSTRAINT [fk_sensor_location] FOREIGN KEY ([id_sensor_location], [sensors_serial_no]) REFERENCES [dbo].[Sensor_locations] ([entry_no], [sensor_serial_number])
);

