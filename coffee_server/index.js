const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Coffee server is running......");
})

app.listen(port, ()=>{
console.log("The  Coffee server is running on port :", port);
})