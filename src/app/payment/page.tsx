import Box from '@/components/Box'
import Headline from '@/components/Headline'
import PayLinkedButton from '@/components/PayLinkedButton'
import SectionInnerBox from '@/components/SectionInnerBox'
import { payment } from '@/const/nav'
import { PAYMENT } from '@/const/payment'
import React from 'react'

function page() {

  return (
    <div>
      <Headline img='/images/party/image.jpg' title='決済方法について' titleEn='PAYMENT' breadcrumbs={[payment]} />
      <SectionInnerBox>
        <Box title='決済方法について'>
          <h3 className='text-lg mt-8 mb-14'>deakon（デアコン）では、パーティーの申し込みを行っていただいた際、
            次の決済方法をご用意しています。お客様ご自身でご選択していただけます。</h3>
          <ul className='my-10'>
            {PAYMENT.map((item) => {
              return (
                item.name === "決済ボタン" ? <PayLinkedButton /> :
                  <li key={item.name} className='my-8'>
                    <p>● {item.name}</p>
                    <ul className='my-2 list-disc ml-8'>
                      {item.contents.map((content) => {
                        return (
                          <li key={content.text} className={content.option ? "list-none -ml-4" : ""}>{content.text}</li>
                        )
                      })}
                    </ul>
                  </li>
              )
            })}
          </ul>
        </Box>
      </SectionInnerBox >
    </div >
  )
}

export default page