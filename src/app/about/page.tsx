import Box from '@/components/Box'
import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { about } from '@/const/nav'
import React from 'react'

function page() {
  return (
    <div>
      <Headline img='/images/party/image.jpg' title='デアコンとは？' titleEn='ABOUT' breadcrumbs={[about]} />
      <SectionInnerBox>
        <Box title='デアコンとは？'>
          <div className='text-center text-lg my-6'>
            <ul className='leading-relaxed [&>li]:my-4'>
              <li>日本最大級の婚活パーティー・街コン・出会いイベント情報サイト。</li>
              <li>街コン、恋活などあなたにぴったりの婚活パーティーがきっと見つかります！</li>
              <li>都道府県別に年代、職業など条件別に検索可能です。</li>
              <li>参加体験談など事前に口コミ情報を知ることもでき、素敵な出会いをサポートします。</li>
            </ul>
          </div>
        </Box>
      </SectionInnerBox>
    </div>
  )
}

export default page