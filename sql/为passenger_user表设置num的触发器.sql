if exists (select name from sysobjects where name='tr_p_u_addNum' and type='TR')
drop trigger tr_p_u_addNum
go
create trigger tr_p_u_addNum
	on passenger_user
	after insert
as
	