import React from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from './docPage/documentHelpers';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Avaleht">
      <Grid container spacing={2} gap={3} margin={2}>
        <Grid size={6}>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(`/document/${mockDocType12973}/${mockDocNr12973}/1`)
            }
          >
            Dokument 1
          </Button>
        </Grid>

        <Grid size={6}>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(`/document/${mockDocType12976}/${mockDocNr12976}/2`)
            }
          >
            Dokument 2
          </Button>
        </Grid>

        <Grid size={6}>
          <Button
            variant="outlined"
            onClick={() => navigate('/proceeding/1/1')}
          >
            Menetlus 1
          </Button>
        </Grid>

        <Grid size={6}>
          <Button
            variant="outlined"
            onClick={() => navigate('/proceeding/2/2')}
          >
            Menetlus 2
          </Button>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default HomePage;
