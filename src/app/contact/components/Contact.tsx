"use client"

import { Contact } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<Contact>()
    const [response, setResponse] = useState<{ message: string, state: number }>()

    const requiredRules = {
        required: "*必須項目です",
    }

    const lengthRules = {
        minLength: { value: 6, message: "*6文字以上で入力してください。" },
        maxLength: { value: 32, message: "*32文字以内で入力してください。" },
    }

    const confirmMailRules = {
        validate: (value: string) => {
            return (
                value === getValues("mail") || "*メールアドレスが一致しません"
            )
        }
    }

    const onSubmit = (data: Contact) => {

        axios.post("/api/contact.php", data).then((res) => {
            setResponse(res.data)
            reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid place-items-center'>
            <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600 [&>li]:mb-2
            [&_textarea]:border-red-300 [&_textarea]:border-2 [&_textarea]:rounded-md [&_textarea]:outline-red-600'>

                <li>
                    <p>お名前</p>
                    <input className='' type='text' {...register('name', requiredRules)} />
                    {errors.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
                </li>
                <li>
                    <p>フリガナ</p>
                    <input className='' type='text' {...register('ruby', requiredRules)} />
                    {errors.ruby && <p className='text-sm text-red-600'>{errors.ruby.message}</p>}
                </li>
                <li>
                    <p>住所</p>
                    <input className='text' type='' {...register('address', requiredRules)} />
                    {errors.address && <p className='text-sm text-red-600'>{errors.address.message}</p>}
                </li>
                <li>
                    <p>電話番号</p>
                    <input className='' type='tel' {...register('phone', requiredRules)} />
                    {errors.phone && <p className='text-sm text-red-600'>{errors.phone.message}</p>}
                </li>
                <li>
                    <p>メールアドレス</p>
                    <input className='' type='email' {...register('mail', requiredRules)} />
                    {errors.mail && <p className='text-sm text-red-600'>{errors.mail.message}</p>}
                </li>
                <li>
                    <p>確認用メールアドレス</p>
                    <input className='' type='email' {...register('confirmMail', { ...requiredRules, ...confirmMailRules })} />
                    {errors.confirmMail && <p className='text-sm text-red-600'>{errors.confirmMail.message}</p>}
                </li>
                <li>
                    <p>お問い合わせ内容</p>
                    <textarea rows={4} {...register("inquiryDetails", requiredRules)}></textarea>
                    {errors.inquiryDetails && <p className='text-sm text-red-600'>{errors.inquiryDetails.message}</p>}
                </li>
            </ul>
            <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-32 mt-6 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                <img className='w-6 mr-2' src={"/images/common/contact.png"} alt="" />
                <p>送信</p>
            </button>
            {response ? <p className={response.state === 1 ? "text-green-500 mt-3 -mb-3 text-center"
                : "text-red-500" + ' mt-3 -mb-3 text-center'}>{response.message}</p> : null}
        </form>
    )
}


export default Contact