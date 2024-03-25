import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// About component displaying imagelist for website
function About() {
  return (
    <Box sx={{ width: 1250, height: 1150, overflowY: 'scroll',margin: 'auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaHnWYEcusK2HPlJj61OZ3hnawEAylvsCSg&usqp=CAU',
    title: 'Bed',
    author: 'Bed',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQL29B1fsHMqUU0c_3Kga3v1PFKMDVrMCBQA&usqp=CAU',
    title: 'Books',
    author: 'CHAIR',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKoq9SvoByEbJ-dwxVFaPjseEWzNhrne0Jw&usqp=CAU',
    title: 'Sink',
    author: 'LIVING ROOM',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'KITCHEN',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'VASE',
  },
  {
    img: 'https://hips.hearstapps.com/hmg-prod/images/floral-green-wallpaper-1530221873.jpg',
    title: 'Chairs',
    author: 'LIVING ROOM',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'TABLE',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'DOOR',
  },
  {
    img: 'https://shop.archidzielo.pl/eng_pl_Chaise-Longue-House-Edizioni-Monterey-14569_5.jpg',
    title: 'Coffee',
    author: 'SOFA',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg2h4U4rsW8pWfvM3yDYheLi0-maKQFNsWQ&usqp=CAU',
    title: 'Storage',
    author: 'COUCH',
  },
  {
    img: 'https://i.pinimg.com/564x/aa/6f/c4/aa6fc424222d40d4d0deddf7d53cee8d.jpg',
    title: 'Candle',
    author: 'CORNER',
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/05/73/68/66/1000_F_573686645_I099lNAG3pHmxGtnsK6rwhT1f6XFzsYX.jpg',
    title: 'Coffee table',
    author: 'CORNOR',
  },
];

export default About ;
