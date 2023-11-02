import { ClassName } from '@/types'
import React from 'react'

type Props = ClassName

function UpdatePasswordLink({ className }: Props) {
    return (
        <a className={className + ' text-white w-max block'} href="/change-password.html">
            <div className={'text-center w-[210px] py-2 px-4 bg-red-400 rounded-3xl hover:bg-opacity-80'}>
                パスワードを更新
            </div>
        </a>
    )
}

export default UpdatePasswordLink