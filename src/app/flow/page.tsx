import Box from '@/components/Box'
import Headline from '@/components/Headline'
import { flow } from '@/const/nav'
import React from 'react'
import { FLOW } from './const/flow'
import FlowBox from './components/FlowBox'
import SectionInnerBox from '@/components/SectionInnerBox'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='お申し込みの流れ' titleEn='flow' breadcrumbs={[flow]} />
            <SectionInnerBox>
                <Box title='オンライン婚活の流れ'>
                    <div className='grid sm:grid-cols-2'>
                        {FLOW.map((item) => {
                            return (
                                <FlowBox key={item.title} order={item.order} title={item.title} content={item.content} img={item.img} />
                            )
                        })}
                    </div>
                </Box>
            </SectionInnerBox>
        </div>
    )
}

export default page