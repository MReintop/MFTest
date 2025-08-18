import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Avaleht">
      <Grid container spacing={2} gap={3} margin={2}>
        <Grid size={6}>
          <Button variant="outlined" onClick={() => navigate('/document/1')}>
            Dokument 1
          </Button>
        </Grid>
        <Grid size={6}>
          <Button variant="outlined" onClick={() => navigate('/document/2')}>
            Dokument 2
          </Button>
        </Grid>

        <Grid size={12}>
          <Button
            variant="outlined"
            onClick={() => navigate('/proceeding/1/1')}
          >
            Menetlus
          </Button>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default HomePage;
