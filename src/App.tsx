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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Demo Amplify React App </h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <S3ContentDisplayPage />
      <ServiceRequestsPage />
    </>
  )
}

export default withAuthenticator(App, {
  // signUpAttributes: ['email'],
});
