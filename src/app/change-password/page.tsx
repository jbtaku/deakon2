import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { changePassword, myPage } from '@/const/nav'
import React from 'react'
import ChangePassword from './components/ChangePassword'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='パスワードの再設定' titleEn='UPDATE PASSWORD' breadcrumbs={[myPage, changePassword]} />
            <SectionInnerBox className='max-w-[700px] w-[96%]'>
                <ChangePassword />
            </SectionInnerBox>
        </div>
    )
}

export default page