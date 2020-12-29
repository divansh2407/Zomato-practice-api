

const DB_USER = "divansh";
const DB_PASSWORD = "ust123456";
const DB_NAME = "zomato";
const CLUSTER_HOST = "apidemo.5spcg.mongodb.net";

//mongodb+srv://divansh:<password>@apidemo.5spcg.mongodb.net/<dbname>?retryWrites=true&w=majority

exports.DB_URI= `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

