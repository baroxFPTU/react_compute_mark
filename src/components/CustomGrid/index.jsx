import React from 'react';
import { Grid } from '@mantine/core';


function CustomGrid({children, ...props}) {
  return (
    <Grid grow>
      {children?.map((item, index) => (
        <Grid.Col  sm={6} lg={3} key={index}>
          {item}
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default CustomGrid;