// --- mui
import { TextField, Typography } from '@mui/material';
// --- react api
import { InputHTMLAttributes } from 'react';

/**
 * Customized Input Element of type text
 * @param props attributes of input
 */
const CustomTextField = (props: InputHTMLAttributes<HTMLInputElement>) => {

  const {
    value,
    name,
    onChange,
    placeholder,
    required
  } = props;

  return (
    <TextField
      label={
        <Typography
          variant='body2'
          sx={{ display: 'inline' }}
        >
          {placeholder}
        </Typography>
      }
      variant="filled"
      margin="dense"
      fullWidth
      size='small'
      required={!!required}
      value={value}
      name={name}
      onChange={onChange}
    />
  )
}

export default CustomTextField;