// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Stack, Typography } from '@mui/material';
// --- react api
import { ReactNode } from 'react';
// --- next api
import Link from 'next/link';
// --- constants
import { HOVER_TRANSITION, TEXT_SHADOW } from '@/lib/constants';

interface IProps {
  title: string,
  list: { element: ReactNode, linkTo?: string }[]
  children?: ReactNode
}

/**
 * Individual footer section with list of links
 */
const LinksSection = ({ title, list, children }: IProps) => {
  return (
    <Stack
      direction='column'
      sx={style.wrapper}
    >
      <Typography
        variant='h6'
        component='span'
        sx={style.title}
      >
        {title}
      </Typography>

      {list.map((i, idx) => <Typography
        key={idx}
        variant='body2'
        component='span'
        sx={style.listItem}
      >
        {!!i.linkTo ? <Link href={i.linkTo}>{i.element}</Link> : <>{i.element}</>}
      </Typography>
      )}
      {children}
    </Stack>
  )
}

export default LinksSection;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    gap: { xs: 0.6, sm: 0.4 },
    width: {
      xs: '100%',
      sm: '85%',
      md: 'auto'
    },
    alignItems: {
      xs: 'center',
      sm: 'flex-start'
    },
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 600,
    color: 'white.dark',
    marginBottom: {
      sm: 1
    }
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0.4,
    textWrap: 'nowrap',
    color: 'grey.400',
    textShadow: TEXT_SHADOW,
    '&>a': {
      color: 'grey.400',
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: `color ${HOVER_TRANSITION}`,
      '&:hover': {
        color: 'white.main'
      }
    }
  }
}