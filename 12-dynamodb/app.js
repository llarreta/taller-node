var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2",
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey:"YOUR_SECRET_KEY"
    /*endpoint: "http://localhost:8000"*/
  });

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName : "product",
    KeyConditionExpression: "#att=:value"/*"#yr = :yyyy"*/,
    ExpressionAttributeNames:{
        "#att": "productId"
    },
    ExpressionAttributeValues: {
        ":value": "8c9a4f8e-5f85-435b-9b60-1edea1fa5922"
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.productId + ": " + item.businessName);
        });
    }
});