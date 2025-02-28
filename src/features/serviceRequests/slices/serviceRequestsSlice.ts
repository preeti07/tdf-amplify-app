import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceRequest } from "../../../API"; // Import Amplify types
import { fetchServiceRequestsApi, addServiceRequestApi } from "../apis/serviceRequestsApi";

// Fetch Service Requests
// export const fetchServiceRequests = createAsyncThunk("serviceRequests/fetch", async () => {
//   const response = await client.graphql({ query: listServiceRequests });
//   return response.data.listServiceRequests.items as ServiceRequest[];
// });

// Create Service Request
// export const addServiceRequest = createAsyncThunk(
//   "serviceRequests/add",
//   async (formData: Omit<CreateServiceRequestInput, "id" | "creationDate" | "resolutionDate">) => {
//     const calculateResolutionDate = (severity: string) => {
//       const daysToAdd = severity === "Low" ? 5 : severity === "Medium" ? 3 : 1;
//       const resolutionDate = new Date();
//       resolutionDate.setDate(resolutionDate.getDate() + daysToAdd);
//       return resolutionDate.toISOString().split("T")[0];
//     };

//     const newRequest: CreateServiceRequestInput = {
//       id: uuidv4(),
//       ...formData,
//       creationDate: new Date().toISOString().split("T")[0],
//       resolutionDate: calculateResolutionDate(formData.severity),
//     };

//     await client.graphql({
//       query: createServiceRequest,
//       variables: { input: newRequest },
//     });

//     return newRequest;
//   }
// );

// Redux Slice
const serviceRequestSlice = createSlice({
  name: "serviceRequests",
  initialState: {
    items: [] as ServiceRequest[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    fetchServiceRequests: (state, action: PayloadAction<ServiceRequest[]>) => {
      // state.loading = true;
      state.items = action.payload;
    },
    addServiceRequest: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceRequestsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceRequestsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServiceRequestsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch service requests";
      })
      .addCase(addServiceRequestApi.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default serviceRequestSlice.reducer;
export const { fetchServiceRequests, addServiceRequest } = serviceRequestSlice.actions;
