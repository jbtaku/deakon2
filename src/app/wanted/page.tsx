import Headline from '@/components/Headline'
import { wanted } from '@/const/nav'
import React from 'react'

function page() {
  return (
    <Headline img='/images/party/image.jpg' title='パーティー掲載情報募集' titleEn='WANTED' breadcrumbs={[wanted]} />
  )
}

export default page