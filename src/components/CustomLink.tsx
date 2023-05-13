import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { logger } from '@/middlewares/logger';

interface ICustomLinkProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  children: ReactNode;
}

interface ILinkProps extends ICustomLinkProps, LinkProps {}

export const CustomLink = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ILinkProps): React.JSX.Element => {
  logger.info({ primary, size, backgroundColor, ...props });
  return (
    <Link href={props.href} className="my-link">
      {children}
    </Link>
  );
};

export default CustomLink;
