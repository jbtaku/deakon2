import Headline from '@/components/Headline'
import { resetPassword } from '@/const/nav'
import React from 'react'
import ResetPassword from './components/ResetPassword'
import SectionInnerBox from '@/components/SectionInnerBox'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='パスワードのリセット' titleEn='RESET PASSWORD' breadcrumbs={[resetPassword]} />
      <SectionInnerBox className='max-w-[700px]'>
        <ResetPassword />
      </SectionInnerBox>
    </div>
  )
}

export default page