
const request = require('request')
const path = require('path')
const met = require('./met.js')
const express = require('express')

let router = express.Router()

const app = express()
const port = process.env.PORT || 3000

app.use('/',router);

app.listen(port, function(){
    console.log('up and running !');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/students/:id', function(req, res){
    if(req.params.id == 'A01192923'){
        res.json({
            "id" : "A01192923",
            "fullname" : "Jorge Alberto Olvera Ramírez",
            "nickname" : "el george",
            "age" : 23
        })
    } else {
        res.json({
            "error" : "404",
            "message" : "couldn't find requested id"
        })
    }

})

router.get('/met', function(req, res){
    met.getArt(req.query.search, function(result){
        if (result == 404){
            res.json({
                'error' : '404',
                'message' : 'id not found'
            })
        } else if (result == 500){
            res.json({
                'error' : '500',
                'message' : 'internal server error'
            })
        } else{
            const data = response.body
            if (data.response == 'False'){
                console.log('Error' + data.Error)
            } else {
                res.json({
                    'searchTerm' : req.query.search,
                    'artist' : constituents[0].name,
                    'title' : title,
                    'year' : objectEndDate,
                    'technique' : medium,
                    'metUrl' : objectURL
                })
            }          
        }

    })
})