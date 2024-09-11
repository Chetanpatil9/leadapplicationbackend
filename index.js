require('dotenv').config();
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const router=require('./router/index')
const port=process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', router);

app.get('/', (req, res)=>{
    res.status(200).send('server start')
})

app.listen(port, ()=>{
   console.log(`server start on port no ${port}`);
})
