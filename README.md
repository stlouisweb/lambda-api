The inspiration for this project structure can be found here:
- [https://kalinchernev.github.io/tdd-serverless-jest/](https://kalinchernev.github.io/tdd-serverless-jest/)    

The tutorial repo:
- [https://github.com/kalinchernev/aws-node-signed-uploads](https://github.com/kalinchernev/aws-nde-signed-uploads)

### Set Up

- Clone [this repo](https://github.com/stlouisweb/lambda-api), `cd` into the project directory and `yarn install`
- [Set up AWS Credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Usage

#### Run all tests with coverage report    
`yarn coverage`

#### Watch mode for developing tests
`npx jest --watch`

#### Run linter
`yarn lint`

#### Run service locally:
`yarn start`

#### Deploy
`yarn deploy`
