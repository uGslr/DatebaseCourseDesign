ALTER PROCEDURE procedure_verifyLogin
	@account varchar(20), 
	@password_inPut varchar(20)
AS
BEGIN
	SELECT account, uName, aType
	FROM [user]
	WHERE account = @account AND [password] = @password_inPut
END