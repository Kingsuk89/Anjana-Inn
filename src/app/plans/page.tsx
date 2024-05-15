export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Container from '@/components/utils/Container';
import React from 'react';
import CardContainer from '@/components/plane/CardContainer';

const page = () => {
  return (
    <Container className="h-full">
      <CardContainer />
    </Container>
  );
};

export default page;
