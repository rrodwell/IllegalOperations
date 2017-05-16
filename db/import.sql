LOAD DATA LOCAL INFILE 'C:/Users/Emily/Desktop/project/IllegalOperations/db/2016Players.csv'
INTO TABLE players
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES