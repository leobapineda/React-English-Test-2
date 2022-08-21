import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {



  useEffect(() => {
   async function fetchData() {
     try {
      const { data } = await axios.get(url);
      console.log(data);
     } catch (error) {
      console.log(error);
     }
   }
   fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
