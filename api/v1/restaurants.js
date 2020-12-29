
var RESOURCE_NAME = 'restaurants';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 

var db = require('../../db/restaurants')
var apiErrors = require('../../util/errors')
var apiMessages = require('../../util/messages')

var memoryCache = require("memory-cache");
var cache = (duration) => {
    return (req, res, next) => {
        let key = "_express_" + req.originalUrl || req.url;
        let cachedBody = memoryCache.get(key);
        if (cachedBody) {
            res.send(cachedBody);
            return;
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                memoryCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            };
            next();
        }
    };
};



module.exports = function(router){
    'use strict';

    router.route(URI).get(function(req, res,next){
        console.log("GET Restaurants")

        var criteria = {validTill : {$gte : new Date()}}


        db.select(criteria, function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved resturants = %d",docs.length)
                res.send(docs)
            }
        });
    });

    router.route(URI).post(function(req, res,next){
        console.log("POST  Restaurants")

        var doc = req.body;

        db.save(doc, function(err,saved){
            if(err){
                res.status(400).send(err)
            } else {
                res.send(saved)
            }
        });
    });
}
var processMongooseErrors = function (message, method, endpoint, err, payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError') {
        errorList = processValidationErrors(err)
    } else if (err.code == 11000) {
        // it could be database error - 11000 is for duplicate key
        errorList.push(apiErrors.errors.PACKAGE_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}
