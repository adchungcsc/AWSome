# AWSome
A static website that can be automatically deployed to AWS using CDK.

### Installation Instructions
1. Clone the AWSome repo to the build machine.
2. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and set the AWS account you wish to deploy the site to.
3. Install [NodeJS](https://nodejs.org/en/download/)
4. Install [CDK]https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) with `npm install -g aws-cdk`
5. Run `cd build && npm install`
6. Run `cdk deploy` and accept all prompts
7. Verify deployment on the AWS console by checking the deployed resources and by checking the Cloudformation stack.




