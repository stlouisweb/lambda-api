import { promisify } from 'util';
import lambda from '../src/handler';
import eventStub from './stubs/eventHttpApiGateway.json';

const handler = promisify(lambda);

describe(`Lambda Greeting Service`, () => {
  test(`Response contains JSON object with message string`, () => {
    const event = eventStub;
    const context = {};

    const result = handler(event, context);
    result.then(data => expect(data).toMatchSnapshot());
  });
});
