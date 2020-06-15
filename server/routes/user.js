const express = require('express');

const app = express();

app.post('/user/',(req,res)=>{

    let body = req.body;

    if(body === undefined) {
        return res.status(400).json({
            ok:false,
            err
        });
    };
    res.json({
        ok: true,
        message: "usuario creado"
    });
});

module.exports = app;