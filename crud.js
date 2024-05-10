const express=require ('express');
const dbconnect=require('./mongo_conn');
const app=express();

let mongodbObjectId=require('mongodb').ObjectId;
app.use(express.json());

app.get('/',async(req,res)=>
{
    let data=await dbconnect();
    data=await data.find().toArray();
    res.send(data);
})

app.post('/',async(req,res)=>
{
    let data=await dbconnect();
    data=await data.insertOne();
    res.send(data);
})

app.put('/',async(req,res)=>
    {
        let data=await dbconnect();
        let result=data.updateOne(
            {product:product.req.body},{$set:req.body}
        );
        res.send({result:'update'});
    })

    app.delete('/:id',async(req,res)=>
        {
            console.log(reqire.params.id)
            let data=await dbconnect();
            data=await data.delteOne({_id:new mongodbObjectId(reqire.params.id)});
            res.send(data);
        })
app.listen(5000);