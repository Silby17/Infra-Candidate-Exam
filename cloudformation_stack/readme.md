# Candidate Stubs API

The API for the candidates exam for the Platform Web group

## Deployment
This can be deployed to AWS using the CloudFormation template

* Create a zip file called `candidate_stubs_lambda_code.zip`, consisting of the following files:
    * `index.js`
    * `stubs.json`
* Upload the zip file to the S3 Bucket: `ic-infra-general`
* Then using the AWS CloudFormation console create a new stack using the attached template

You will receive the following outputs as defined by the CloudFormation Template:
* ApiGatewayInvocationURL: The API Gateway invocation URL
* APIUrl: The custom domain URL
