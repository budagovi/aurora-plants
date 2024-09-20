// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import {
  FormControl,
  InputLabel,
  Typography,
  FilledInput,
  InputAdornment,
  IconButton
} from '@mui/material';
// --- icons
import { Visibility, VisibilityOff } from '@mui/icons-material';
// --- react api
import { useState, MouseEvent, InputHTMLAttributes } from 'react';

/**
 * Customized Input Element of type password with hide/show functionality
 * @param props attributes of input
 */
const PasswordField = (props: InputHTMLAttributes<HTMLInputElement>) => {

  const {
    value,
    name,
    onChange,
    placeholder,
    required
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl
      variant="filled"
      required
      size='small'
      margin='dense'
    >
      <InputLabel htmlFor="filled-adornment-password">
        <Typography
          variant='body2'
          sx={{ display: 'inline' }}
        >
          {placeholder}
        </Typography>
      </InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={showPassword ? 'text' : 'password'}
        required={!!required}
        value={value}
        name={name}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PasswordField;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

}