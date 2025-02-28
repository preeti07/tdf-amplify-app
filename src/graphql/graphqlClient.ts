import { generateClient } from '@aws-amplify/api';
import awsmobile from '../aws-exports'; // Ensure the correct path

const graphqlConfig = {
  // aws_appsync_graphqlEndpoint: awsmobile.aws_appsync_graphqlEndpoint,
  // aws_appsync_region: awsmobile.aws_appsync_region,
  // aws_appsync_authenticationType: awsmobile.aws_appsync_authenticationType,
  endpoint: awsmobile.aws_appsync_graphqlEndpoint, // Required
  authMode: awsmobile.aws_appsync_authenticationType as 'userPool',
};


const client = generateClient(graphqlConfig);


export default client;