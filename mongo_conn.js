


import { MongoClient } from "mongodb";
const url="mongodb://localhost:27017";
const client=MongoClient(url);

async function dbconnect()
{
       let result=await client.connect();
       let db=result.db("ecommerce");
       return db.collection("products");
}

module.exports=dbconnect;