// --- types
import AuthCard from '@/components/Authentication Segment/AuthCard';
import SignInForm from '@/components/Authentication Segment/SignInForm';
import type { SxPropsMap } from '@/lib/types';

const SignInSegment = () => {
  return (
    <>
      <AuthCard
        title='Sign in'
        secondaryText='Login to your account in a seconds'
      >
        <SignInForm />
      </AuthCard>
    </>
  )
}

export default SignInSegment;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

}