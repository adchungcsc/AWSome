import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb"
import * as lambda from "@aws-cdk/aws-lambda"
import * as apigateway from "@aws-cdk/aws-apigateway";

export class BackendStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const locationsDatabaseTable = new dynamodb.Table(this, "Locations",{
            partitionKey: { name: "LocationID", type: dynamodb.AttributeType.STRING },
            sortKey: { name: "LocationName", type: dynamodb.AttributeType.STRING },
            tableName: "Locations",

        });

        const locationsApiEndpointHandler = new lambda.Function(this, "LocationsAPIEndpointHandler", {
            runtime: lambda.Runtime.GO_1_X,
            code: lambda.Code.fromAsset("../backend/api/function/handler.zip"),
            handler: "function.handler",
        });

        //Let the lambda API have RW access to the db
        locationsDatabaseTable.grantReadWriteData(locationsApiEndpointHandler);

        const api = new apigateway.RestApi(this, "LocationsAPI");
        const locations = api.root.resourceForPath("/locations");
        locations.addMethod("GET", new apigateway.LambdaIntegration(locationsApiEndpointHandler));
        locations.addMethod("POST", new apigateway.LambdaIntegration(locationsApiEndpointHandler));
        locations.addMethod("PUT", new apigateway.LambdaIntegration(locationsApiEndpointHandler));
        locations.addMethod("DELETE", new apigateway.LambdaIntegration(locationsApiEndpointHandler));
    }
}

