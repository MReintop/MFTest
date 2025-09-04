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
  Tooltip,
  MenuItem,
  Avatar,
  Menu,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  mockDocNr12973,
  mockDocNr12976,
  mockDocType12973,
  mockDocType12976,
} from '../../constants/dotyConstants';
import { roles } from '../../constants/userConstants';
import {
  setCurrentRole,
  userCurrentRoleSelector,
} from '../../store/ehrUiSlice';

const PageWrapper = ({ title, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentRole = useSelector(userCurrentRoleSelector);

  const [anchorElUser, setAnchorElUser] = useState();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRoleSelect = (selectedRole) => {
    dispatch(setCurrentRole(selectedRole));
    setAnchorElUser(null);
  };

  return (
    <Container>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Container>
          <MenuItem>
            <Button onClick={() => navigate('/')}>Avaleht</Button>
          </MenuItem>

          <MenuItem>
            <Button
              onClick={() =>
                navigate(`/document/${mockDocType12973}/${mockDocNr12973}/1`)
              }
            >
              Dokument 1
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              onClick={() =>
                navigate(`/document/${mockDocType12976}/${mockDocNr12976}/2`)
              }
            >
              Dokument 2
            </Button>
          </MenuItem>

          <MenuItem>
            <Button onClick={() => navigate('/proceeding/1/1')}>
              Menetlus 1
            </Button>
          </MenuItem>

          <MenuItem>
            <Button onClick={() => navigate('/proceeding/2/2')}>
              Menetlus 2
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

            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Typography>{currentRole}</Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {roles.map((role) => (
                  <MenuItem key={role} onClick={() => handleRoleSelect(role)}>
                    <Typography sx={{ textAlign: 'center' }}>{role}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">{children}</Container>
    </Container>
  );
};

export default PageWrapper;
