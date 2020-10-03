import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';

export class FrontendStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Setup s3 bucket to store static site in
        // NOTE: Choose your own adventure with the bucketName s3 property. This MUST be unique as it becomes the subdomain of the URL.
        // [SUBDOMAIN].s3-website-[REGION].amazonaws.com
        const websiteBucket = new s3.Bucket(this, 'website', {
            bucketName: "adchungcsc",
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: '404.html'
        });

        // Deploy files to s3 bucket so they can be accessed publicly
        const deployWebsite = new s3Deployment.BucketDeployment(
            this,
            'deployWebsite',
            {
                sources: [s3Deployment.Source.asset('../frontend')],
                destinationBucket: websiteBucket,
            }
        );
    }
}
