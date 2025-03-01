import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import './amplify-config';
import { S3ContentDisplayPage } from './features/s3ContentDisplay/S3ContentDisplayPage';
import { ServiceRequestsPage } from './features/serviceRequests/ServiceRequestsPage';
import { Header } from './features/global/Header';

function App() {

  return (
    <>
      <Header />
      <ServiceRequestsPage />
      <S3ContentDisplayPage />
    </>
  )
}

export default withAuthenticator(App);
