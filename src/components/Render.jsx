import React from 'react';
import CoachCard from './CoachCard';
import { Box } from '@mui/material';

function Render({ list, onBookWorkout }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',   // 1 column on extra small screens
          sm: 'repeat(2, 1fr)',   // 2 columns on small screens
          md: 'repeat(3, 1fr)',   // 3 columns on medium screens
          lg: 'repeat(4, 1fr)'    // 4 columns on large screens and up
        },
        gap: '32px',
        maxWidth: '1360px',
        margin: '40px auto',
        padding: '0',
        height: 'auto',
        opacity: 1,
        width: '100%',            // Ensure the grid takes the full width of the container
        boxSizing: 'border-box'   // Include padding and border in the element's total width and height
      }}
    >
      {list.map((person, index) => (
        <CoachCard key={index} person={person} />
      ))}
    </Box>
  );
}

export default Render;
