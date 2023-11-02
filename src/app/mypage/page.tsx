import React from 'react'
import Reserved from './components/Reserved'
import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { myPage } from '@/const/nav'
import Logout from './components/Logout'
import UpdatePasswordLink from './components/UpdatePasswordLink'
import UpdateAccountLink from './components/UpdateAccountLink'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='マイページ' titleEn='MY PAGE' breadcrumbs={[myPage]} />
      <SectionInnerBox className='max-w-[1020px] w-[96%]'>
        <Reserved />
        <UpdateAccountLink className='mt-6' />
        <UpdatePasswordLink className='mt-3' />
        <Logout className='mt-3' />
      </SectionInnerBox>
    </div>
  )
}

export default page