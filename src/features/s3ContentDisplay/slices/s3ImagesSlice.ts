import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchS3ImageApi } from '../apis/fetchS3ImageApi';
// import { getUrl } from '@aws-amplify/storage';

interface ImageState {
  imageUrl: string | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  imageUrl: undefined,
  loading: false,
  error: null,
};

// Async thunk to fetch image URL


const s3ImagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchS3Image: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchS3ImageApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchS3ImageApi.fulfilled, (state, action) => {
        state.loading = false;
        state.imageUrl = action.payload;
      })
      .addCase(fetchS3ImageApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default s3ImagesSlice.reducer;
export const { fetchS3Image: fetchS3ImageAction } = s3ImagesSlice.actions;
