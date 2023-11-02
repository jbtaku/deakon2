import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { myPage, updateUserInfo } from '@/const/nav'
import React from 'react'
import UpdateUserInfo from './components/UpdateUserInfo'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='ユーザー情報の更新' titleEn='UPDATE USER' breadcrumbs={[myPage, updateUserInfo]} />
            <SectionInnerBox className='max-w-[700px] w-[96%]'>
                <UpdateUserInfo />
            </SectionInnerBox>
        </div>
    )
}

export default page