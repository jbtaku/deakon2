import Headline from '@/components/Headline'
import Search from '@/components/Search'
import { search } from '@/const/nav'
import React from 'react'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='パーティーを探す' titleEn='SEARCH' breadcrumbs={[search]} />
      <Search/>
    </div>
  )
}

export default page