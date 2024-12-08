import React, { useEffect, useState } from 'react';
import axios from 'axios';
/*import './NASAComponent.css';*/
import './styles.css';

function NASAComponent()  {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=6hhcsFSXRhPHFNZBEsJeDQX4cvYfGfdJQGdPKB0w`
        );
        setImageData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <div>
      {imageData ? (
        <div className="nasaImgDiv">
          <img className="nasaImg" src={imageData.url} alt={imageData.title} />
          <h4>NASA image of the day: {imageData.title}</h4>
        </div>
      ) : (
        <p>Loading image data...</p>
      )}
    </div>
  );
};
export default NASAComponent;