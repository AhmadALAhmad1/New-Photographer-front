import React,{useEffect,useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Avatar, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import Options from './Options';

function srcset(image, size, rows = 1, cols = 1) {
  console.log(image)
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios({
     url:'http://localhost:5000/api/gallery/get', 
     method: 'GET',
     headers: {
       'Content-Type': 'multipart/form-data',
    },
   })
     .then((res) => setPhotos(res.data))
     .catch((err) => console.error(err));
 }, []);
 console.log(photos)
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <ImageList variant="quilted" cols={4} rowHeight={200}>
          {photos && itemData.map((item, index) => (
            <ImageListItem
              key={item.id}
              cols={
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].cols
              }
              rows={
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].rows
              }
              sx={{
                opacity: '.7',
                transition: 'opacity .3s linear',
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
            >
              <Options />
              <img
                {...srcset(
                  item.img,
                  200,
                  pattern[
                    index - Math.floor(index / pattern.length) * pattern.length
                  ].rows,
                  pattern[
                    index - Math.floor(index / pattern.length) * pattern.length
                  ].cols
                )}
                alt={item.category}
                loading="lazy"
              />
              <Typography
                variant="body2"
                component="span"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  background: 'rgba(0,0,0, .3)',
                  p: '5px',
                  borderTopRightRadius: 8,
                }}
              >
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}



const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];