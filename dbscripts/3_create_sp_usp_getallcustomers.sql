USE [YleanaCodingExercise]
GO

/****** Object:  StoredProcedure [dbo].[USP_GetAllCustomers]    Script Date: 11/8/2015 10:38:00 PM ******/
DROP PROCEDURE [dbo].[USP_GetAllCustomers]
GO

/****** Object:  StoredProcedure [dbo].[USP_GetAllCustomers]    Script Date: 11/8/2015 10:38:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[USP_GetAllCustomers]
AS

SELECT CustomerName, ContactName, [Address], City, PostalCode, Country
FROM Customers
GO


