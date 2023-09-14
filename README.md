# Object-Relational-Mapping (ORM): E-commerce-Back-End
!["Screenshot of Insomnia with 200 Ok for Products"](./images/Insomnia%20200%20ok%20Products.png)

## Description
This application is built on a local back-end server that synchronizes with the Sequelize library and a MySQL database. This project is part of a coding bootcamp challenge from Kansas University. The objective is to create a simulation of an e-commerce platform where users can view, create, update, and delete products, tags, and categories.

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Resources](#Resources)
  * [Deployment](#deployment)
  * [Questions](#questions)

## Installation
To install the application, enter the following command in your console: 'npm install'.

These are the dependencies:
```
"dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"
  }
   ```
## Usage
Clone the repository or download the zip file. Once you are in the right directory on your CLI, run the 'npm install' command to install the dependencies. Then, log into your MySQL account with 'mysql -u root -p', run 'source db/schema.sql;', and quit/exit. Then, run the command 'node seeds/index.js' to seed the database. Finally, run the command 'npm run start'.
***
If you want to practice, debug or just break the code, you can use the command 'nodemon run' which runs the nodemon that updates the server as you work on it. This is, as long as the code is not broken.
***
Also, do not forget to add the '.env' file and add there your database, user and your password. Then, in '.gitignore' add the '.env' file. Use the global variables in the sequilize connection.

## License
   [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit/)

## Resources
* https://www.npmjs.com/package/nodemon
* https://sequelize.org/docs/v6/getting-started/
* https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
* https://expressjs.com/en/guide/routing.html

## Deployment
Here is a walkthrough video link of the project.
* https://drive.google.com/file/d/1Nw_-kbY5yHzkk-z1_11YYr-fB1R9oK6x/view



## Questions
Any question regarding the project or contribution, contact me through my GitHub account.