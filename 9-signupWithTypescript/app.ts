import express from 'express'
import cors from 'cors';

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

import * as AWS from 'aws-sdk';

import { SignupRequest } from './signupRequest'

global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : "us-east-2_c3MNGk6x0", // Your user pool id here    
    ClientId : "tcf1d6qkb6kqrpqo6nmqeajtf" // Your client id here
    }; 
const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const app = express();

app.use(cors());
app.use(express.json());

const url = '/api/signup';

app.post(url, (req, res) => {
    console.log("JSON:" + JSON.stringify(req.body));
    let request: SignupRequest = req.body;

    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:request.email}));
 
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"Prasad Jayashanka"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"preferred_username",Value:"jay"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"CMB"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+5412614324321"}));
    */
    userPool.signUp(request.username, request.password, attributeList, [], function(err: any, result: any){
        if (err) {
            console.log(err);
            res.json(err);
            return;
        }
        let cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.json({
            bienvenido: `${cognitoUser.getUsername()}`
        })
    });
   
});

app.listen(3000, () => {
    console.log('Listening on port 3000 url:' + url)
});











