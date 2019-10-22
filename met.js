const request = require('request')

function getArt(objectID, callback){
    const url = "https://collectionapi.metmuseum.org/public/collection/v1/search" + 
        objectID
    request({url, json: true}, function(error, response){
        if(error){
            callback(error, undefined)
        } else{
            const data = response.body
            if (data.Response == 'False'){
                callback(data.Error, undefined)
            }
            else {
                if (data.total == 0){
                    callback(404)
                }               
                else{
                    callback(data.objectIDs[0], undefined)
                }              
            }
          
        }

    })

}

module.exports = {
    getArt : getArt
}
