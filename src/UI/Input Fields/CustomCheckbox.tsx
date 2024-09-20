// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { FormControlLabel, Checkbox } from '@mui/material';

interface IProps {
  defaultChecked?: boolean,
  size?: "small" | "medium" | "large",
  label: string
}

const CustomCheckbox = ({ defaultChecked = false, size = 'medium', label }: IProps) => {
  return (

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={!!defaultChecked}
          size={size}
        />
      }
      label={label}
    />
  )
}

export default CustomCheckbox;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

}