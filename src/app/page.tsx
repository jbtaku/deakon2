import Categories from '@/components/Categories'
import News from '@/components/News'
import Parties from '@/components/Parties'
import Search from '@/components/Search'
import Section from '@/components/Section'
import React from 'react'

function page() {
  const bgImage = "bg-[url(/images/common/bg.jpg)] py-10"
  const today = new Date().toLocaleDateString('sv-SE')
  return (
    <div>
      <img src="/images/top/main.jpg" alt="" />
      <Section title='パーティーを探す' titleEn='SEARCH'>
        <Search />
      </Section>
      <Section title='開催予定のパーティー一覧' titleEn='PARTY LIST' className={bgImage}>
        <div className='max-w-[1020px] mx-auto'>
          <Parties startDate={today} />
        </div>
      </Section>
      <Section title='カテゴリーからパーティーを探す' titleEn='CATEGORY'>
        <Categories className='w-[97%] mx-auto grid gap-2 md:gap-4 grid-cols-2 2xs:grid-cols-3 md:grid-cols-4' />
      </Section>
      <Section title='お知らせ' titleEn='NEWS' className={bgImage}>
        <News className='my-4' />
      </Section>
    </div>
  )
}

export default page