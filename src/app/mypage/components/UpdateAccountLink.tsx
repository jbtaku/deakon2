import { ClassName } from '@/types'
import React from 'react'

type Props = ClassName

function UpdateAccountLink({ className }: Props) {
    return (
        <a className={className + ' text-white w-max block'} href="/update-account.html">
            <div className={'text-center w-[210px] py-2 px-4 bg-red-400 rounded-3xl hover:bg-opacity-80'}>
                アカウント情報の更新
            </div>
        </a>
    )
}

export default UpdateAccountLink