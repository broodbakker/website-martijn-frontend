import React from 'react';
// Modules
import { NextPage } from 'next/types';
import Head from '../components/head'

import { Button } from '@material-ui/core';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head title="Home" />
      <Button color="primary" variant="contained">My App</Button>
      test
    </div>
  );
};

export default HomePage;