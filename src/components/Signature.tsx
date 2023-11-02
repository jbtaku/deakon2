import React from 'react'

function Signature() {
    return (
        <ul className='flex flex-col items-end [&>li]:my-[1px] text-sm'>
            <li>株式会社ラブチャレンジャー</li>
            <li>〒530-0001 大阪府大阪市北区梅田<br className='block sm:hidden' />1丁目11番4号大阪駅前第4ビル9階923</li>
            <li>Email：info@deakon.jp</li>
            <li>TEL：06-4400-5208</li>
            <li>代表：田中春子</li>
        </ul>
    )
}

export default Signature