// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Grid } from '@mui/material';
// --- components
import CategoriesItem from './CategoriesItem';

/**
 * List of product categories represented in grid layout
 */
const CategoriesGrid = () => {
  return (
    <Grid container sx={style.wrapper} >

      <CategoriesItem
        individualStyle={{
          backgroundImage: "url('./assets/plant-category-thumbnail.jpg')",
          gridArea: {
            xs: '1 / 1 / 1 / 1',
            sm: '1 / 1 / 3 / 3'
          },
        }}
        linkTo='/store'
        text='plants'
      />

      <CategoriesItem
        individualStyle={{
          backgroundImage: "url('./assets/cactus-category-thumbnail.jpg')",
          gridArea: {
            xs: '2 / 1 / 2 / 1',
            sm: '1 / 3 / 1 / 3'
          },
        }}
        linkTo='/store'
        text='cactuses'
      />

      <CategoriesItem
        individualStyle={{
          backgroundImage: "url('./assets/bonsai-category-thumbnail.jpg')",
          gridArea: {
            xs: '3 / 1 / 3 / 1',
            sm: '2 / 3 / 3 / 3'
          },
        }}
        linkTo='/store'
        text='bonsai'
      />

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
    }
  }
} 