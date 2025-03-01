import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchS3ImagesApi } from './apis/fetchS3ImagesApi';
import { AppDispatch, RootState } from '../../store';
import { s3ImagesToGetUrl } from './constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useStyles from './S3ContentDisplayPageStyles';

const S3ContentDisplayPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const dispatchRef = useRef(dispatch);
  const classes = useStyles();

  const { imageUrl, loading, error } = useSelector((state: RootState) => state.s3images);

  useEffect(() => { 
    dispatchRef.current(fetchS3ImagesApi(s3ImagesToGetUrl));
  }, []);

  if (loading || !imageUrl) return <p>Loading image...</p>;
  if (error) return <p>Error loading image: {error}</p>;

  return (
    <div className={classes.root}>
      <h3>S3 Content Display Page</h3>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          style={{ width: "100%", height: "auto" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {imageUrl.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index}`}
                style={{
                  width: "50%",
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px"
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </div>
  );

};

export { S3ContentDisplayPage };