// import { Storage } from '@aws-amplify/storage';
import { getUrl } from '@aws-amplify/storage'; // ✅ Import Storage separately


const fetchImage = async () => {
  try {
    const imageUrl = await getUrl({ path: 'tdf-img-1.png' }); 
    console.log('Image URL:', imageUrl.url);
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export { fetchImage };
