import { AppBar } from '@mui/material/';
import { Box } from '@mui/material/';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { Toolbar } from '@mui/material/';
import { Typography } from '@mui/material/';

const header = () => {
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <Typography
                     style={{ fontWeight: '700', marginLeft: '40px' }}
                     sx={{ flexGrow: '1' }}
                  >
                     <Link to="/" style={{ fontSize: '32px' }}>
                        Movie Watchlist
                     </Link>
                  </Typography>
                  <Link to="/">
                     <Button
                        color="inherit"
                        style={{ fontWeight: '500', fontSize: '20px' }}
                     >
                        Watchlist
                     </Button>
                  </Link>
                  <Link to="/">
                     <Button
                        color="inherit"
                        style={{ fontWeight: '500', fontSize: '20px' }}
                     >
                        Watchlist
                     </Button>
                  </Link>
                  <Link to="/watched">
                     <Button
                        color="inherit"
                        style={{ fontWeight: '500', fontSize: '20px' }}
                     >
                        Watched
                     </Button>
                  </Link>
                  <Link to="/add">
                     <Button
                        color="inherit"
                        style={{ fontWeight: '500', fontSize: '20px' }}
                     >
                        Add
                     </Button>
                  </Link>
               </Toolbar>
            </AppBar>
         </Box>
      </>
   );
};

export default header;
