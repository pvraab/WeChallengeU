### We Challenge You

### Overview

This app provides a challenge board application using a MySQL database to store application data (see the README_DB.md for schema description). Node, Express, and a sequelize ORM. Following the MVC design pattern; I used Node and a sequelize ORM to query, update, create, and delete records in a MySQL database and route data in the app.

## MVP

- Create a Challenge Board application.
- Target audience includes teachers/students, friends/colleagues, anyone who wants to create or join a challenge board.
- I will use this application to look for challenges I am interested in and then join them and track my completion of the challenge.
- I will use this application to become a user, create or join challenges, setup a challenge with goals, timeframes, and prizes, and monitor  my and other users progress in completing a challenge.

### GitHub Access

- [GitHub Repository](https://github.com/pvraab/WeChallengeU/)

- [Heroku Repository](https://pvraab-wechallengeu.herokuapp.com/)

This app is hosted on Heroku so we can run the Express server and use the JawsDB MySQL addon.

### To Run

You can run a demo of this app at the Heroku repository. If you want to download the app from GitHub and run it locally you need to follow the following steps:

- Prerequisites: Node.js, MySQL and npm.
- Run git clone on the GitHub repository.
- cd into the working directory.
- Run npm install to install all of the required Node.js packages.
- Create a .env file in the top level directory  to set the NODE_ENV to development and to set your MySQL database root password:

NODE_ENV="development"
DB_PASSWORD="YourPassword"

- Follow the README_DB.md to load the schema into MySQL and populate the database with the demo data.
- Run the app using - $ node server
- Open the app on a browser at "http://localhost:3000"

## Fun To Have

- Administrator for the application who can see and manage all users and challenges.
- Scheme for awarding prizes for challenges or series of challenges.
- Opt out of a challenge.
- Let anyone define a challenge using a set of possible formats - goals with checkboxes, goals with multiple choice dropdowns.
- Scoresheet view for a given challenge.
- Progress report.
- Chat function.
