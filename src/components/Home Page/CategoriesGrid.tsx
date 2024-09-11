// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Grid } from '@mui/material';
// --- components
import CategoriesItem, { IProps as ICategoryItemProps } from './CategoriesItem';

const CategoryItemsList: ICategoryItemProps[] = [
  {
    bgImgUrl: "url('./assets/plant-category-thumbnail.jpg')",
    linkTo: '/store',
    text: 'plants'
  },
  {
    bgImgUrl: "url('./assets/cactus-category-thumbnail.jpg')",
    linkTo: '/store',
    text: 'cactuses'
  },
  {
    bgImgUrl: "url('./assets/bonsai-category-thumbnail.jpg')",
    linkTo: '/store',
    text: 'bonsai'
  }
]

/**
 * List of product categories represented in grid layout
 */
const CategoriesGrid = () => {
  return (
    <Grid container sx={style.wrapper} component='section' >

      {CategoryItemsList.slice(0, 3).map(i =>
        <CategoriesItem
          bgImgUrl={i.bgImgUrl}
          linkTo={i.linkTo}
          text={i.text}
        />
      )}

    </Grid>
  )
}

export default CategoriesGrid;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    aspectRatio: {
      xs: 3 / 2.5,
      sm: 3 / 1.8,
    },
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(1, 1fr)',
      sm: '1fr 1fr 1.5fr',
    },
    gridTemplateRows: {
      xs: 'repeat(3, 1fr)',
      sm: 'repeat(2, 1fr)'
    },
    gap: {
      xs: 0.3,
      sm: 0.4,
      md: 0.8,
      lg: 1.2
    },
    // styling grid items (only 3)

    '&>div:nth-of-type(1)': {
      gridArea: {
        xs: '1 / 1 / 1 / 1',
        sm: '1 / 1 / 3 / 3'
      },
    },
    '&>div:nth-of-type(2)': {
      gridArea: {
        xs: '2 / 1 / 2 / 1',
        sm: '1 / 3 / 1 / 3'
      },
    },
    '&>div:nth-of-type(3)': {
      gridArea: {
        xs: '3 / 1 / 3 / 1',
        sm: '2 / 3 / 3 / 3'
      },
    }
  }
} 