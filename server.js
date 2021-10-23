
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const bcrypt =require('bcrypt-nodejs');
const knex = require('knex')

const register = require('./controllers/register-server'); 
const signin = require('./controllers/signin-server');
const profile = require('./controllers/profile');
const image = require('./controllers/image-server'); 



const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '0000',
    database : 'postgres'
  }
});


const app = express();


app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {res.send(database.users)} )
app.post('/signin',  signin.handleSignin( db , bcrypt))
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt) })


app.get('/profile/:id', (req, res) =>{profile.handleProfileGet(req, res, db)})


app.put('/image', (req, res) => {image.handleImage(req, res, db)}) 

  



app.listen(process.env.PORT || 8080, () => {  
console.log(`app is runing on localhost ${process.env.PORT}`);
})