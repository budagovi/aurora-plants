// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Stack, Typography } from '@mui/material';
// --- react api
import { cloneElement, ReactElement } from 'react';

export interface IProps {
  icon: ReactElement,
  title: string,
  text: string
}

/**
 * Styled Service item component
 */
const ServicesItem = ({ icon, title, text }: IProps) => {
  return (
    <Stack
      sx={style.serviceItem}
    >
      {cloneElement(icon, { sx: style.icon })}
      <Stack
        direction='column'
        sx={style.textWrapper}
      >
        <Typography
          variant='body2'
          sx={style.textPrimary}
        >
          {title}
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          sx={style.textSecondary}
        >
          {text}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ServicesItem;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  serviceItem: {
    flexDirection: {
      xs: 'row',
      md: 'column'
    },
    alignItems: 'center',
    gap: {
      xs: 0.4,
      md: 0.3
    }
  },

  icon: {
    width: {
      xs: 25,
      sm: 30,
      md: 40
    },
    height: {
      xs: 25,
      sm: 30,
      md: 40
    },
    padding: {
      xs: 0.5,
      sm: 0.7,
      lg: 1
    },
    marginBlock: 1,
    boxSizing: 'content-box',
    backgroundColor: 'primary.main',
    color: 'background.default',
    display: 'block',
    borderWidth: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20
    },
    borderStyle: 'solid',
    borderColor: 'secondary.main',
    borderRadius: 50
  },
  textWrapper: {
    minWidth: {
      xs: 0,
      sm: 270,
      md: 0
    },
    width: {
      xs: 230,
      sm: 'auto'
    },
    padding: {
      xs: 0.5,
      md: 0
    },
  },
  textPrimary: {
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: {
      xs: 'left',
      md: 'center'
    }
  },
  textSecondary: {
    color: 'grey.600',
    textAlign: {
      xs: 'left',
      md: 'center'
    }
  }
}