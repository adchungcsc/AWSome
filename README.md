# AWSome
A serverless website that can be automatically deployed to AWS using CDK. The front end is hosted in an s3 bucket while the backend is handled by lambda functions which will spin up on demand. Costs associated with running this site are low.

*[Curent deployed site](http://adchungcsc.s3-website-us-east-1.amazonaws.com/)*

### Installation Instructions
1. Clone the AWSome repo to the build machine.
2. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and set the AWS account you wish to deploy the site to.
3. Install [NodeJS](https://nodejs.org/en/download/)
4. Install [CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) with `npm install -g aws-cdk`
5. Run `cd build && npm install`
6. Run `cdk deploy` in build and accept all prompts
7. Verify deployment on the AWS console by checking the deployed resources and by checking the Cloudformation stack.

### MonoRepo Architecture
- Typescript CDK build scripts (frontend & backend) are in /build
- Frontend HTML, CSS, and Javascript can be found in /frontend
- Backend programs are found in /backend

### General Usage
- To change the s3 subdomain, change the s3 bucket name property in build/lib/frontend-stack.ts

### Destruction Instructions
1. Manually delete the contents of the generated S3 bucket via the AWS console (There is no workaround to this. Destruction won't work until it's removed)
2. Run `cdk destroy` in build and accept all prompts to destroy the deployed site. No traces of the site will remain which prevents further charges from AWS.









