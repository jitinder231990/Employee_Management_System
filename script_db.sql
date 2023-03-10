USE [master]
GO
/****** Object:  Database [Employee_database]    Script Date: 07-03-2023 16:38:29 ******/
CREATE DATABASE [Employee_database]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Employee_database', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\Employee_database.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Employee_database_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\Employee_database_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Employee_database] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Employee_database].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Employee_database] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Employee_database] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Employee_database] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Employee_database] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Employee_database] SET ARITHABORT OFF 
GO
ALTER DATABASE [Employee_database] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Employee_database] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Employee_database] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Employee_database] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Employee_database] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Employee_database] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Employee_database] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Employee_database] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Employee_database] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Employee_database] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Employee_database] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Employee_database] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Employee_database] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Employee_database] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Employee_database] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Employee_database] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Employee_database] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Employee_database] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Employee_database] SET  MULTI_USER 
GO
ALTER DATABASE [Employee_database] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Employee_database] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Employee_database] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Employee_database] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Employee_database] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Employee_database] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Employee_database] SET QUERY_STORE = ON
GO
ALTER DATABASE [Employee_database] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Employee_database]
GO
/****** Object:  Table [dbo].[tbl_employee]    Script Date: 07-03-2023 16:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_employee](
	[name] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[dob] [datetime] NULL,
	[department] [varchar](50) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbl_employee] ON 

INSERT [dbo].[tbl_employee] ([name], [email], [dob], [department], [id]) VALUES (N'Sumit Singh', N'sumit@gmail.com', CAST(N'1995-08-18T00:00:00.000' AS DateTime), N'QA', 1)
INSERT [dbo].[tbl_employee] ([name], [email], [dob], [department], [id]) VALUES (N'Patrick', N'patrik@gmail.com', CAST(N'1995-01-07T06:20:29.387' AS DateTime), N'QA', 2)
INSERT [dbo].[tbl_employee] ([name], [email], [dob], [department], [id]) VALUES (N'Jitinder ', N'jitinder@gmail.com', CAST(N'1996-06-14T00:00:00.000' AS DateTime), N'Developer', 3)
INSERT [dbo].[tbl_employee] ([name], [email], [dob], [department], [id]) VALUES (N'Akshay Patial', N'ak@gmail.com', CAST(N'1990-09-02T00:00:00.000' AS DateTime), N'Testing', 5)
SET IDENTITY_INSERT [dbo].[tbl_employee] OFF
GO
USE [master]
GO
ALTER DATABASE [Employee_database] SET  READ_WRITE 
GO
