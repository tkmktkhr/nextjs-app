import React from 'react';
import { Button } from '@mui/material';
import { logger } from '@/middlewares/logger';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const CustomButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): React.JSX.Element => {
  logger.info({ primary, size, backgroundColor });
  return (
    <Button href="/users" sx={{ textTransform: 'none' }} {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
