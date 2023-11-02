import React from 'react'

function page() {
    return (
        <div className='mt-32 sm:mt-40 lg:mt-60 grid max-w-[850px] w-[96%] mx-auto text-center'>
            <p className='text-lg sm:text-xl font-semi-bold'>
                <span className='inline-block'>予約申込みは現在承認待ちです。</span>
                <span className='inline-block'>(承認されると通知メールが送信されます)</span>
            </p>
            <div className='mt-12 w-max mx-auto'>
                <a className='text-red-400 text-xl' href="/">
                    <p className='border-b-2 px-px border-gray-400'>ホームに戻る</p>
                </a>
            </div>
        </div>
    )
}

export default page