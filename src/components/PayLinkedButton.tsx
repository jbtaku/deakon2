import React from 'react'

function PayLinkedButton() {
  return (
    <div className='border-2 px-6 pt-3 pb-5 w-max rounded-xl -mt-2'>
        <p className='text-semibold text-lg'>deakon 決済</p>
        <p className='text-xl font-bold mt-2'>お客様の入力</p>
        <img className='w-72 xs:w-80 2xs:w-96 -mt-2 -mb-4' src="/images/payment/square-logo.png" alt="決済ロゴ" />
        <div className='hover:bg-opacity-[85%] bg-[#006aff] text-center py-3 px-10 w-max rounded-md'>
            <a href="https://square.link/u/tUWg4JSn">
                <p className='text-white text-lg border-b-[1px] border-white'>支払いを行う</p>
            </a>
        </div>
    </div>
  )
}

export default PayLinkedButton