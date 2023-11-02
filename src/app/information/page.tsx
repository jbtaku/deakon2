import Headline from '@/components/Headline'
import News from '@/components/News'
import { news } from '@/const/nav'
import React from 'react'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='お知らせ' titleEn='NEWS' breadcrumbs={[news]} />
      <News />
    </div>
  )
}

export default page