import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../../graphql/graphqlClient';
import { listServiceRequests, getServiceRequest } from '../../../graphql/queries';
import { createServiceRequest, deleteServiceRequest } from '../../../graphql/mutations';
import { fetchAuthSession } from '@aws-amplify/auth';
import { getMappedServiceRequestFromFormData } from '../../../utils/getMappedServiceRequestFromFormData';
import { ServiceRequestFormDataType } from '../../../types';


const getAuthToken = async (): Promise<string> => {
  try {
    const session = await fetchAuthSession();
    return session?.tokens?.idToken?.toString() ?? "";
  } catch (error) {
    console.error("Error fetching auth token:", error);
    return "";
  }
};

const fetchServiceRequestsApi = createAsyncThunk(
  "serviceRequests/fetchServiceRequests",
  async () => {
    const authToken = await getAuthToken();
    const response = await client.graphql({
      query: listServiceRequests,
      authToken,
    });
    return response.data.listServiceRequests.items;
  }
);

const fetchServiceRequestByIdApi = async (id: string) => {
  const response = await client.graphql({
    query: getServiceRequest,
    variables: { id },
  });
  return response.data.getServiceRequest;
};

const addServiceRequestApi = createAsyncThunk(
  "serviceRequests/addServiceRequest",
  async (formData: ServiceRequestFormDataType) => {
    const authToken = await getAuthToken();

    const newRequest = getMappedServiceRequestFromFormData(formData);

    const result = await client.graphql({
      query: createServiceRequest,
      variables: { input: newRequest },
      authToken,
    });

    return result.data.createServiceRequest;
  }
);

const removeServiceRequestApi = async (id: string) => {
  return client.graphql({
    query: deleteServiceRequest,
    variables: { input: { id } },
  });
};

export { fetchServiceRequestsApi, fetchServiceRequestByIdApi, addServiceRequestApi, removeServiceRequestApi };
