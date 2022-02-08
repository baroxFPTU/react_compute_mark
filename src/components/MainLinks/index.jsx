import { Box, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => {
  return {
    mainLinks: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    link: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
      textDecoration: 'none',
      padding: theme.spacing.md,
      cursor: 'pointer',
      borderRadius: theme.radius.md,
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      },
    }
  }
})

function MainLinks(props) {
  const {classes} = useStyles();

  return (
    <div className={classes.mainLinks}>
      <Box mt={"sm"} component={Link} to="/tinh-diem-tot-nghiep" className={classes.link}>
        Điểm tốt nghiệp
      </Box>
      <Box mt={"sm"} component={Link} to="/tinh-diem-hoc-ki" className={classes.link}>
        Điểm học kì
      </Box>
      <Box mt={"sm"} component={Link} to="/tinh-diem-mon-hoc" className={classes.link}>
        Điểm theo môn
      </Box>
    </div>
  );
}

export default MainLinks;