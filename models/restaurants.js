/**
 * "REST API practice"
 * 
 * Model for the zomato resturant package.
 */

var settings = require('../db/settings')


var RestaurantsSchema = settings.mongoose.Schema(
    {
        
        name: {type:String, required:[true,'name is needed']},
        description : {type:String, required:true},
        type: {type:String, enum:['hotel','resturant']},
        destinations : [{lcoation:String, city:String}],
        includes : [{
            what:{type:String, enum:['seating resturant','staying rooms']},
            description:{type:String, required:false}
        }],
        pricePP: Number,
        offer : {
            discount: Number,
            description : String,
            expires:{type:Date, required:false}
        },
        pictures:{type:[String]}
    }
);

exports.Restaurants = settings.mongoose.model('restaurant', RestaurantsSchema)