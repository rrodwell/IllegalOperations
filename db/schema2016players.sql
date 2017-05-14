CREATE DATABASE nflplayers2016_db;
USE nflplayers2016_db;



create table nflplayers2016_db.players
(
	id int auto_increment
		primary key,
	Name text null,
	YearClear int null,
	Position text null,
	ProBowl int null,
	Age int null,
	WR int null,
	GamesPlayed int null,
	GamesStarted int null,
	Receptions int null,
	LongestReception int null,
	LongestRushingAttempt int null,
	PickNumber int null,
	YdsSkd int null,
	FantasyPoints float null,
	createdAt timestamp null,
	updatedAt timestamp null
)
;