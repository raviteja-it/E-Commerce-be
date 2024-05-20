const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tempDB';
const aliensRoutes = require('./routes/aliens')
const PORT = 5002;
const app = express();

mongoose.connect(url);
const con = mongoose.connection
con.on('open',()=>{
    console.log('connected');
})

app.use(express.json())
app.use('/aliens',aliensRoutes);


app.listen(PORT,()=>{`server started at ${PORT}`});