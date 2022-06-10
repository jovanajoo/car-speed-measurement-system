--Administrators
INSERT INTO Administrators VALUES ('Milan Tepic','97-2018@gmail.com','tepke22','tepke22','true');
INSERT INTO Administrators VALUES ('Bojan Simic','38-2018@gmail.com','bojansi','bojansi','true');
INSERT INTO Administrators VALUES ('Jovana Bulatovic','197-2018@gmail.com','jovanajoo','jovanajoo','true');

--Sensors
INSERT INTO Sensors VALUES (659855296,'HOLSTEIN 2VSS0076','');
INSERT INTO Sensors VALUES (987845456,'Dorman 917-614','');
INSERT INTO Sensors VALUES (123654878,'AFI VSS9028','');

--Sensors Locations
INSERT INTO Sensor_Locations (start_date,latitude,longitude,active,max_speed,sensor_serial_number)
VALUES ('2022-05-26',43.91161315864126,20.408835289888,1,60,123654878);

INSERT INTO Sensor_Locations (start_date,latitude,longitude,active,max_speed,end_date,sensor_serial_number)
VALUES ('2022-05-23',43.89794343927399,20.421645244569486,0,80,'2022-05-24',659855296);

--Sensor Readings
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 52.3, 1, 123654878, 1);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 78, 0, 659855296, 2);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 48.1, 0, 123654878, 1);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 74, 0, 659855296, 2);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 47, 0, 123654878, 1);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 82.4, 1, 659855296, 2);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 87.8, 1, 659855296, 2);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 46, 0, 123654878, 1);
INSERT INTO Sensor_Readings(timestemp, measured_speed, speeding, sensors_serial_no, id_sensor_location) VALUES(CURRENT_TIMESTAMP, 53, 1, 123654878, 1);