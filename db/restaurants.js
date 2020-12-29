/**
 * All database operations related to the Resturants collection will reside in this file
 */
var model = require('../models/restaurants')
var settings = require('../db/settings')


exports.save = function (data, callback) {

    new model.Resturants(data).save(function (err, inserted) {
        callback(err, inserted)

    })
}


exports.saveMany = function (rows, callback) {

    model.Resturants.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}


exports.update = function (criteria, doc, callback) {
    model.Resturants.updateMany(criteria, doc, function (err, data) {
        callback(err, data)

    })
}


exports.select = function (criteria,options, callback) {

    // Local variable for capturing limit & offset
    var lim = 5
    var off = 1
    if(options.pagination !== undefined){
        if(options.pagination.limit !== undefined)  lim = parseInt(options.pagination.limit)
        if(options.pagination.offset !== undefined)  off = parseInt(options.pagination.offset)
    }

    model.Course.find(criteria, function (err, data) {
        callback(err, data)
    }).select(options.fields).skip(off).limit(lim)
}