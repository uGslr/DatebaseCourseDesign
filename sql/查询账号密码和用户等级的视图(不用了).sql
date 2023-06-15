CREATE VIEW findUser (account,[password], aType)
AS
	SELECT account, [password], aType
	FROM [user]