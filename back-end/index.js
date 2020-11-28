const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb://localhost:27017";
const DATABASE_NAME = "m_physics_db";

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var database, collection;

app.post('/api/login/', (req, res) => {
    var student_id = req.body.student_id;
    var password = req.body.password;
    collection.findOne({ student_id:student_id })
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({student_id: user.student_id}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'login success',
                        token
                    })
                }
                else{
                    res.json({
                        message: 'password not matched'
                    })
                }
            })
        }
        else{
            res.json({
                message: "user not found",
            })
        }
    })
    res.status(200).send("Success");

});



app.listen(8081, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("users");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});