# ERIS.Database

#Instructions for Microsoft SQL Server Management Studio

Download and install Microsoft SQL Server Management Studio
https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?msclkid=575d625acf5311ecaa1d2eb05a7cdc2c&view=sql-server-ver15#download-ssms

Connect this to the database server you wish to run the table creation scripts on

#Instructions to run sql files to create tables on CalTrans Database Server

Once connected to the database server
1.	View -> Object Explorere (F8)
2.	Expand the server you have connected to
3.	Right click on Databases -> New Database
4.	Enter the desired details for the ERIS database and select OK (Ref: https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database?msclkid=53b79737cf5411ecb374b927d0bb308c&view=sql-server-ver15)
5.	Expand Databases
6.	Right click the newly created database -> New Query
7.	Open the sql file to run, and select Execute
8.	Repeat step 7 for the files in this order: AssessmentProfile, AssessmentDetails, Photo
	8a.	AssessmentDetails and Photo reference AssessmentProfile, as such AssessmentProfile must be run first