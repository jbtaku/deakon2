import Form from '@/components/Form'
import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import { REGISTER_FORM, SEND_REGISTER_ITEMS } from '@/const/form'
import { register } from '@/const/nav'
import React from 'react'
import Register from './components/Register'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='会員登録' titleEn='Register' breadcrumbs={[register]} />
            <SectionInnerBox className='max-w-[700px]'>
                <Register />
            </SectionInnerBox>
        </div>
    )
}

export default page