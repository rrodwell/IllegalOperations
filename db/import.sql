LOAD DATA LOCAL INFILE 'C:/Users/Jieun/Desktop/gtbc/group_projects/IllegalOperations/db/2016Players.csv'
INTO TABLE players
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES