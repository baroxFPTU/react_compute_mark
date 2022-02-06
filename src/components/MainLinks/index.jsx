import { Box } from '@mantine/core';
import React from 'react';

function MainLinks(props) {
  const styles = (theme) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
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
      <Box sx={styles} mt={"sm"}>
        Điểm tốt nghiệp
      </Box>
      <Box sx={styles} mt={"sm"}>
        Điểm học kì
      </Box>
      <Box sx={styles} mt={"sm"}>
        Điểm theo môn
      </Box>
    </div>
  );
}

export default MainLinks;