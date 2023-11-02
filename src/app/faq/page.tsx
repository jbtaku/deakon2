import Headline from '@/components/Headline'
import { faq } from '@/const/nav'
import React from 'react'
import FaqBox from './components/FaqBox'
import { FAQ } from './const/faq'
import SectionInnerBox from '@/components/SectionInnerBox'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='よくあるご質問' titleEn='FAQ' breadcrumbs={[faq]} />
      <SectionInnerBox className='max-w-[1000px]'>
        {FAQ.map((item) => {
          return (
            <FaqBox key={item.title} title={item.title} faq={item.faq} />
          )
        })}
      </SectionInnerBox >
    </div>
  )
}

export default page