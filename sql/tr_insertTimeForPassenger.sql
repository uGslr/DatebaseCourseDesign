IF EXISTS (SELECT name FROM sysobjects WHERE name = 'tr_insertTimeForPassenger' AND type = 'TR')
DROP trigger tr_insertTimeForPassenger

GO
	CREATE TRIGGER tr_insertTimeForPassenger
		ON passenger
		AFTER INSERT
	AS
		DECLARE @pIDNo varchar(20)
		SELECT @pIDNo=pIDNo
		FROM INSERTED
		
		UPDATE passenger
		set registerTime = getDate()
		WHERE pIDNo = @pIDNo
