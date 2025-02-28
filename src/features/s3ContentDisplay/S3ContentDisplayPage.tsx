import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchS3ImageApi } from './apis/fetchS3ImageApi';
import { AppDispatch, RootState } from '../../store';

const S3ContentDisplayPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const dispatchRef = useRef(dispatch);

  const { imageUrl, loading, error } = useSelector((state: RootState) => state.s3images);

  useEffect(() => { 
    dispatchRef.current(fetchS3ImageApi('tdf-img-1.png'));
  }, []);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>Error loading image: {error}</p>;

  return (
    <div>
      <h1>S3 Content Display Page</h1>
      {/* <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ctZQu51Mb-VwzE4pIW_IXw.jpeg" /> */}
      <img src={imageUrl} alt="Image loaded from S3" />
    </div>
  );

};

export { S3ContentDisplayPage };