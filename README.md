# The Data Foundry Amplify App

This project is a web application built using React, Redux Toolkit, AWS Amplify, and Material-UI. It includes features for displaying images from an S3 bucket and managing service requests.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [License](#license)

## Project Description

The **TDF Amplify App** is a web application that integrates with **AWS Amplify** to manage and display content from an S3 bucket. It also includes functionality for creating, listing, and managing service requests. Service request data is saved in AWS Dynamo DB table.

## Features

- Display images from an S3 bucket using a carousel.
- Create, list, and manage service requests.
- Responsive design using Material-UI.
- State management with Redux Toolkit.
- Authentication and API integration with AWS Amplify.

## Installation

### **Prerequisites**

- **Node.js** (>=16)
- **AWS CLI** (configured with credentials)
- **Amplify CLI** (installed globally: `npm install -g @aws-amplify/cli`)

### **Steps**

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/preeti07/tdf-amplify-app.git
   cd tdf-amplify-app

   ```

2. Install the dependencies:

   ```sh
   npm install

   ```

3. Configure AWS Amplify:

   ```sh
   amplify init
   amplify push

   ```

4. Start the development server:

   ```sh
   npm start
   ```

## Deployment

To deploy the application using AWS Amplify Hosting, run:

    ```sh
    amplify add hosting
    amplify publish
    ```

This will deploy the app to an AWS-hosted URL.

🔗 Live Demo: https://d18w59s8djdqpu.cloudfront.net

## Usage

Login/Register - Users authenticate via AWS Cognito.
Upload & View Images - Images are stored in S3 and displayed in a carousel.
Create & Manage Service Requests - Service request data is stored in DynamoDB and fetched using GraphQL.
Logout - Users can log out via the header button

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
