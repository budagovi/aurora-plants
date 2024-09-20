// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Card, Typography } from '@mui/material';
// --- react api
import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
  title: string,
  secondaryText: string
}

const AuthCard = ({ children, secondaryText, title }: IProps) => {
  return (
    <Card
      sx={style.wrapper}
    >
      <Typography
        variant='h2'
        sx={style.title}
      >
        {title}
      </Typography>
      <Typography
        variant='body2'
        component='span'
        sx={style.secondaryText}
      >
        {secondaryText}
      </Typography>
      {children}
    </Card>
  )
}

export default AuthCard;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0.5,
    padding: '1.5rem 2.5rem 3rem',
    width: 400
  },

  title: {
    color: 'primary.main',
    fontWeight: 600
  },

  secondaryText: {
    color: 'grey.500',
    fontWeight: 400
  }
}