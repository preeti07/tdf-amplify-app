import { getUrl } from "@aws-amplify/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { s3FolderName } from "../constants";

const fetchS3ImagesApi = createAsyncThunk('images/fetchS3Images', async (imageNames: string[], { rejectWithValue }) => {
  try {
    const imageUrls = await Promise.all(
      imageNames.map(async (imageName) => {
        const path = `${s3FolderName}/${imageName}`;
        const url = await getUrl({path});
        console.log('Image URL:', url.url.toString(), url);
        return url.url.toString();
      })
    )
    return imageUrls;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export { fetchS3ImagesApi };