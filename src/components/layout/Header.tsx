import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  InputBase,
  alpha,
  styled,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from '@mui/material';
import { Search as SearchIcon, KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid #e0e0e0',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '300px',
  [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const topics = [
  "AI & Robotics",
  "Consumer Electronics",
  "Computing",
  "Energy",
  "Telecommunications",
  "Transportation",
  "Aerospace",
  "Semiconductors",
];

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: '70px' }}>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Spark火花
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search technical update"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
              sx={{ 
                color: 'inherit',
                fontWeight: 600,
                '&:hover': { backgroundColor: alpha('#000', 0.05) }
              }}
            >
              Explore by Topics
            </Button>

            <Button
              component={Link}
              to="/innomarket"
              sx={{ 
                color: 'inherit',
                fontWeight: 600,
                '&:hover': { backgroundColor: alpha('#000', 0.05) }
              }}
            >
              InnoMarket
            </Button>

            <Button
              component={Link}
              to="/login"
              sx={{ 
                color: 'inherit',
                fontWeight: 600,
                '&:hover': { backgroundColor: alpha('#000', 0.05) }
              }}
            >
              Log in
            </Button>

            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{ 
                bgcolor: '#1a1a1a',
                color: 'white',
                fontWeight: 600,
                '&:hover': { bgcolor: '#000' }
              }}
            >
              Sign up
            </Button>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'topics-button',
            }}
            sx={{
              '& .MuiPaper-root': {
                width: 220,
                maxHeight: 400,
                mt: 1,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }
            }}
          >
            {topics.map((topic) => (
              <MenuItem 
                key={topic} 
                onClick={handleClose}
                component={Link}
                to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: alpha('#000', 0.03) }
                }}
              >
                {topic}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 