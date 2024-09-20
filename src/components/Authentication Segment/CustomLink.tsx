// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { ButtonBase, Typography } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- constants
import { HOVER_TRANSITION } from '@/lib/constants';
// --- react api
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
  linkTo: string
}
const CustomLink = ({ children, linkTo }: IProps) => {
  return (
    <ButtonBase
      LinkComponent={Link}
      href={linkTo}
    >
      <Typography
        variant='subtitle1'
        sx={style.recoverLink}
      >
        {children}
      </Typography>
    </ButtonBase>
  )
}

export default CustomLink;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  recoverLink: {
    fontWeight: 700,
    color: 'primary.main',
    transition: `color ${HOVER_TRANSITION}`,
    '&:hover': {
      color: 'primary.light'
    }
  }
}