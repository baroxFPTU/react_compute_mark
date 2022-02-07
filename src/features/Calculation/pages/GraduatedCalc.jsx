import { Box, Center, Container, Text, Title } from '@mantine/core';
import React from 'react';
import GraduatedCalcForm from '../components/GraduatedCalcForm';

function GraduatedCalc(props) {
  return (
    <Container>
      <Center style={{marginTop: '20px', marginBottom: '15px'}}>
        <Title order={1} color="blue">
          Tính điểm tốt nghiệp
        </Title>
      </Center>
      <GraduatedCalcForm  mt="md"/>  
    </Container>
  );
}

export default GraduatedCalc;