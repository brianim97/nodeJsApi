
require('dotenv').config();
const express = require('express');
var cors = require('cors');
const dbConnection = require('./db/config');

const app = express();
const port= process.env.PORT;

const paths = {
            users:'/api/users'
        }
        dbConnection();
        app.use(cors());
        app.use(express.json());
        app.use(express.static('public'))
        app.use(paths.users,require('./routes/users'));

  
        app.listen(port,()=>{
            console.log(`SERVER ON: http://localhost:${port}/`);
        });

    




