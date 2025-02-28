import { configureStore } from '@reduxjs/toolkit';
import s3ImagesReducer from './features/s3ContentDisplay/slices/s3ImagesSlice';
import serviceRequestsReducer from './features/serviceRequests/slices/serviceRequestsSlice';

export const store = configureStore({
  reducer: {
    s3images: s3ImagesReducer,
    serviceRequests: serviceRequestsReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
