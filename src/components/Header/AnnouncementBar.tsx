// -- mui
import { Box, Typography } from "@mui/material";

/**
 * Announcement Bar at the top of the Header
 */
const AnnouncementBar = () => {
  return (
    <Box
      sx={style.wrapper}
    >
      <Typography
        variant="subtitle2"
        sx={style.content}
      >
        Summer sale for all seasonal plants and free express delivery - off 50%
      </Typography>
    </Box>
  )
}

export default AnnouncementBar;


// -=-=-=- style -=-=-=-

import type { SxPropsMap } from "@/lib/types";

const style: SxPropsMap = {
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'primary.main',
    paddingBlock: 0.15,
  },

  content: {
    color: 'common.white',
    fontWeight: 300
  }
}
