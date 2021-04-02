Mappenstrucuur:

/api bevat de API backend geschreven in node.js. Vul uw database gegevens in /app/config/config.js. Vanuit de root van de API map voert u "npm install" uit. Dit installeert alle nodige pakketten en kan even duren. Daarna kan de server gestart worden met "node server.js" of "nodemon server.js"

/dataset bevat de originele dataset. deze bestanden zijn in csv.

/json bevat de json structuur van elk van de tabellen

/json_schema bevat de schema's van bovenstaande json bestanden. De schema's zijn volgens draft-07

/react-frontend-crud bevat de poging tot het maken van de frontend app die de API consumeert, helaas kon ik geen manier vinden om de data te valideren en werken dingen zoals bewerken en verwijderen in de app nog niet. Desondanks vind u hier de (voorlopige) broncode. Installatie kan door "npm install" te draaien vanuit de root van de map. Daarna kan de app gestart worden met "npm start". u kunt daarna naar http://localhost:8081 om de app te bekijken

/sql_files bevat de SQL files die geimporteerd moeten worden in de database. Hiervoor moet eerst 1 aangemaakt worden. Deze files maken alleen de tabellen en populaten die met data. De SQL files dienen in de volgorde 2021vaersdata.sql => 2021vaerssymptoms.sql => 2021vaersvax geimporteerd te worden vanwege primary en foreign keys.

/xml bevat de xml structuur van elk van de tabellen

/xsd bevat de XSD's van elk van de bovenstaande XML bestanden. De XSD's zijn gemaakt volgens de laatste standaard.



**LET OP**

Voor deze API dient MySQL server 8.0.20 of daaronder geinstalleerd te worden. Dit vanwege problemen in de manier waarop variable binding word gedaan vanaf 8.0.22. U kunt 8.0.21 proberen, maar 8.0.20 is bevestigd dat het werkt.

