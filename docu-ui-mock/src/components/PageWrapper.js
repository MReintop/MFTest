import React, { useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';

const PageWrapper = ({ title, children }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Container>
          <MenuItem>
            <Button onClick={() => navigate('/')}>Avaleht</Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={() => navigate('/document/1')}>Dokument 1</Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={() => navigate('/document/2')}>Dokument 2</Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={() => navigate('/proceeding/1/1')}>
              Menetlus
            </Button>
          </MenuItem>
        </Container>
      </Drawer>

      <Box sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">{children}</Container>
    </Container>
  );
};

export default PageWrapper;
