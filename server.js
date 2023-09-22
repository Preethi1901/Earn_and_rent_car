const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())     //for destructuring

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))
app.use('/api/admins/' , require('./routes/adminsRoute'))
app.use('/api/owners/' , require('./routes/ownersRoute'))


const path = require('path')
const cors = require('cors');


app.use(cors());
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))




// parse application/json

app.use(bodyParser.json())

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))



