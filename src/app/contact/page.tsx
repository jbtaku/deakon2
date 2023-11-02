import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { contact } from '@/const/nav'
import React from 'react'
import Contact from './components/Contact'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='お問い合わせ' titleEn='CONTACT' breadcrumbs={[contact]} />
      <SectionInnerBox className='max-w-[700px]'>
        <Contact />
      </SectionInnerBox>
    </div>
  )
}

export default page