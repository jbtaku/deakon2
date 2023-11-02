import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { tokusho } from '@/const/nav'
import React from 'react'

function page() {
    const contents: { item: string, content: string, link?: string }[] = [{ item: "販売業者", content: "株式会社ラブチャレンジャー" },
    { item: "屋号又はサービス名", content: "deakon" }, { item: "担当者", content: "田中 春子" },
    { item: "所在地", content: "〒530-0001 大阪府大阪市北区梅田1丁目11番4号大阪駅前第4ビル9階923" },
    { item: "Email", content: "info@deakon.jp" }, { item: "電話", content: "06-4400-5208" },
    { item: "FAX", content: "06-6345-7931" },
    { item: "URL", content: "https://deakon.jp", link: "/" }, { item: "販売価格", content: "各イベント画面にて掲載" },
    { item: "支払方法", content: "クレジットカード（PayPal）／銀行振込／PayPay支払い", link: "/payment.html" }, { item: "キャンセル及び返金", content: "各イベント申し込みの際の返信メールに掲載" },
    { item: "商品代金以外の必要料金", content: "消費税(内税)／振込の場合、銀行振込の際の振込手数料" },
    { item: "お問い合わせ", content: "お問い合わせフォームよりご連絡ください。", link: "/contact.html" }]
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='特定商取引法に基づく表記' titleEn='' breadcrumbs={[tokusho]} />
            <SectionInnerBox className='text-sm w-[92%] max-w-[960px]'>
                <div className='grid grid-cols-4 text-[12px] 2xs:text-sm sm:text-base [&>p]:my-1'>
                    {
                        contents.map((item) => {
                            return (
                                <>
                                    <p className='col-span-1'>{item.item}</p>
                                    {item.link ? <a className='col-span-3 w-max max-w-full' href={item.link}>
                                        <p className='flex'>
                                            <span>：</span>
                                            <span className='text-blue-500 hover:text-opacity-70'>{item.content}</span>
                                        </p>
                                    </a> :
                                        <p className='col-span-3 flex'><span>：</span>
                                            <span>{item.content}</span></p>}
                                </>
                            )
                        })
                    }
                </div>
            </SectionInnerBox>
        </div>
    )
}

export default page