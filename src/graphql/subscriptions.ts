/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateServiceRequest = /* GraphQL */ `subscription OnCreateServiceRequest(
  $filter: ModelSubscriptionServiceRequestFilterInput
  $owner: String
) {
  onCreateServiceRequest(filter: $filter, owner: $owner) {
    id
    caseNumber
    name
    description
    creationDate
    severity
    resolutionDate
    reporterName
    contactEmail
    location
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceRequestSubscriptionVariables,
  APITypes.OnCreateServiceRequestSubscription
>;
export const onUpdateServiceRequest = /* GraphQL */ `subscription OnUpdateServiceRequest(
  $filter: ModelSubscriptionServiceRequestFilterInput
  $owner: String
) {
  onUpdateServiceRequest(filter: $filter, owner: $owner) {
    id
    caseNumber
    name
    description
    creationDate
    severity
    resolutionDate
    reporterName
    contactEmail
    location
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceRequestSubscriptionVariables,
  APITypes.OnUpdateServiceRequestSubscription
>;
export const onDeleteServiceRequest = /* GraphQL */ `subscription OnDeleteServiceRequest(
  $filter: ModelSubscriptionServiceRequestFilterInput
  $owner: String
) {
  onDeleteServiceRequest(filter: $filter, owner: $owner) {
    id
    caseNumber
    name
    description
    creationDate
    severity
    resolutionDate
    reporterName
    contactEmail
    location
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceRequestSubscriptionVariables,
  APITypes.OnDeleteServiceRequestSubscription
>;
