'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Button, Stack, Typography } from '@mui/material';
// --- react api
import { ChangeEvent, useState } from 'react';
// --- components
import PasswordField from '@/UI/Input Fields/PasswordField';
import CustomTextField from '@/UI/Input Fields/CustomTextField';
import CustomCheckbox from '@/UI/Input Fields/CustomCheckbox';
import CustomLink from './CustomLink';

interface ISignInForm {
  username: string,
  password: string,
  rememberMe: boolean
}

const initialValues: ISignInForm = {
  username: '',
  password: '',
  rememberMe: false
}

const SignInForm = () => {

  const [values, setValues] = useState<ISignInForm>(initialValues);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }

  return (
    <Stack
      component='form'
      sx={style.wrapper}
    >

      <CustomTextField
        name='username'
        placeholder='Username'
        required
        value={values.username}
        onChange={changeHandler}
      />

      <PasswordField
        name='password'
        placeholder='Password'
        required
        value={values.password}
        onChange={changeHandler}
      />

      <Stack sx={style.options}>
        <CustomCheckbox
          defaultChecked
          size='small'
          label='Keep me logged in'
        />
        <CustomLink
          linkTo='/sign-in'  // temporary
        >
          Forgot Password?
        </CustomLink>
      </Stack>

      <Button
        variant='contained'
        sx={style.submitBtn}
      >
        Log into account
      </Button>

      <Typography
        variant='subtitle1'
        sx={style.signUpText}
      >
        Don't have an account?
        <CustomLink
          linkTo='/sign-up'
        >
          Sign Up
        </CustomLink>
      </Typography>

    </Stack>
  )
}

export default SignInForm;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    flexDirection: 'column',
    gap: 0.5,
    width: '100%'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  submitBtn: {
    paddingBlock: 0.8,
    textTransform: 'none'
  },
  signUpText: {
    display: 'flex',
    gap: 0.2,
    color: 'grey.600',
  }
}