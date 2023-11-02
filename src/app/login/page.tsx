import Headline from '@/components/Headline'
import { login, register } from '@/const/nav'
import InfoBox from '@/components/InfoBox'
import Login from './components/Login'

function page() {
    return (
        <div className=''>
            <Headline img='/images/party/image.jpg' title='ログイン' titleEn='Login' breadcrumbs={[login]} />
            <div className='md:grid grid-cols-2 max-w-[660px] mx-auto'>
                <div>
                    <Login />
                </div>
                <div className='flex flex-col place-items-center'>
                    <p className="mb-6 mt-12 md:mt-0">まだdeakon
                    <span className='text-[9px] align-text-bottom font-medium'>(デアコン)</span>
                    に登録されていない方</p>
                    <InfoBox img='/images/common/login.png' {...register} className='bg-white rounded-md border-2 border-[#fb5758] text-[#fb5758] py-[3px] pr-4 hover:scale-105' />
                </div>
            </div>
        </div>
    )
}

export default page