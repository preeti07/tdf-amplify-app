import { getUrl } from "@aws-amplify/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchS3ImageApi = createAsyncThunk('images/fetchS3Image', async (imagePath: string, { rejectWithValue }) => {
  try {
    const { url } = await getUrl({ path: imagePath });
    console.log('Image URL:', url, imagePath);
    return url.toString();
  } catch (error) {
    // return rejectWithValue(error.message);
    throw Error("Faled to fetch image from s3" + error);
  }
});
