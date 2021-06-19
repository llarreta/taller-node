"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var AmazonCognitoIdentity = __importStar(require("amazon-cognito-identity-js"));
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
global.fetch = require('node-fetch');
var poolData = {
    UserPoolId: "us-east-2_c3MNGk6x0",
    ClientId: "tcf1d6qkb6kqrpqo6nmqeajtf" // Your client id here
};
var pool_region = 'us-east-2';
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
var url = '/api/signup';
app.post(url, function (req, res) {
    console.log("JSON:" + JSON.stringify(req.body));
    var request = req.body;
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: request.email }));
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"Prasad Jayashanka"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"preferred_username",Value:"jay"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"CMB"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+5412614324321"}));
    */
    userPool.signUp(request.username, request.password, attributeList, [], function (err, result) {
        if (err) {
            console.log(err);
            res.json(err);
            return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.json({
            bienvenido: "" + cognitoUser.getUsername()
        });
    });
});
app.listen(3000, function () {
    console.log('Listening on port 3000 url:' + url);
});
