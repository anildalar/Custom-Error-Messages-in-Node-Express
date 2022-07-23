// const something = require('somelibary');

const express = require('express');
const app = express();
const { body,validationResult ,check } = require('express-validator')

require('dotenv').config();

//app.use(middlewares);
app.use(express.json());



//Lets define some routes


app.post(
        '/students',
            body('password')
            .isLength({min:5})
            .withMessage('The length should be min 5 characters')
            .matches(/\d/)
            .withMessage('must contain a number')
        ,
        (req,res)=>{
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                res.status(400).json({'err':errors.array()});
            }
            //if errors object contain some data means we have errros
            //check for errors object

            res.status(200).json({
                "msg":"Ok",
                "data":req.body.password
            }
        );
});


let PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
});