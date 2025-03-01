import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import './amplify-config';
import { S3ContentDisplayPage } from './features/s3ContentDisplay/S3ContentDisplayPage';
import { ServiceRequestsPage } from './features/serviceRequests/ServiceRequestsPage';

function App() {

  return (
    <>
      <div className='header'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div className='middle'>
          <h1>Demo Amplify React App </h1>
          <p>This is a demo page for creating a front-end application using AWS Amplify that includes user authentication. Your application should have a login page, fetch and display static content from an S3 bucket, and include a mini portal where users can submit inputs, which will be saved to DynamoDB and displayed on the UI.</p>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ServiceRequestsPage />
      <S3ContentDisplayPage />
    </>
  )
}

export default withAuthenticator(App, {
  // signUpAttributes: ['email'],
});
