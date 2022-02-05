import { Box } from '@mantine/core';
import React from 'react';

function MainLinks(props) {
  const styles = (theme) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    padding: theme.spacing.md,
    cursor: 'pointer',
    borderRadius: theme.radius.md,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  }); 

  return (
    <div className="mainLinks">
      <Box sx={styles} >
        Điểm tốt nghiệp
      </Box>
      <Box sx={styles} >
        Điểm học kì
      </Box>
      <Box sx={styles} >
        Điểm theo môn
      </Box>
    </div>
  );
}

export default MainLinks;