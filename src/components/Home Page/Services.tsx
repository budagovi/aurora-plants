// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Stack } from '@mui/material';
// --- icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
// --- components
import ServicesItem, { IProps as IServiceItemProps } from './ServicesItem';

const serviceItemsList: IServiceItemProps[] = [
  {
    icon: <LocalShippingOutlinedIcon />,
    title: 'Free and fast delivery',
    text: 'Free delivery for all the orders over $140'
  },
  {
    icon: <HeadsetMicOutlinedIcon />,
    title: '24/7 customer service',
    text: 'Friendly customer support 24/7',
  },
  {
    icon: <GppGoodOutlinedIcon />,
    title: 'Money back guarantee',
    text: 'We return money within 30 days',
  }
]
/**
 * List of services provided by website
 */
const Services = () => {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={style.wrapper}
    >
      {
        serviceItemsList.map((i, idx) => <ServicesItem
          icon={i.icon}
          title={i.title}
          text={i.text}
          key={idx}
        />)
      }

    </Stack >
  )
}

export default Services;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}