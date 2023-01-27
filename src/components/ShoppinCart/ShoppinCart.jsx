import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton   aria-label="cart">
      <StyledBadge className='text-white text-2xl ' badgeContent={1} color='secondary'>
        <ShoppingCartIcon className='text-2xl' id='shoppingCart'  />
      </StyledBadge>
    </IconButton>
  );
}