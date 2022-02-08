import React from 'react';
import { Grid } from '@mantine/core';


function CustomGrid({children, fluid}) {
  console.log('fluid', fluid);
  return (
    <Grid grow>
      {children?.map((item, index) => (
        <Grid.Col
          sm={6}
          lg={3}
          key={index}
          style={{flexBasis: fluid ? '100%' : '', display: !item ? 'none' : ''}}
        >
          {item}
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default CustomGrid;