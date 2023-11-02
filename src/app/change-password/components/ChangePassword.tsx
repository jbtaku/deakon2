"use client"

import useLocalStorage from '@/hooks/useLocalStorage'
import { Login } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function ChangePassword() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Login>()
    const [response, setResponse] = useState<{ message: string, state: number }>()
    const [id, token] = useLocalStorage()

    const rules = {
        required: "*新規パスワードを入力してください",
        minLength: { value: 6, message: "*6文字以上で入力してください。" },
        maxLength: { value: 32, message: "*32文字以内で入力してください。" }
    }

    const confirmPasswordRules = {
        validate: (value: string) => {
            return (
                value === getValues("password") || "*パスワードが一致しません"
            )
        }
    }

    const onSubmit = (data: Pick<Login, "password">) => {
        const postData = { ...data, id, token }

        axios.post("/api/change-password.php", postData).then((res) => {
            setResponse(res.data)
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid place-items-center'>
            <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600'>
                <li className='w-[185px] mx-auto'>
                    <p>新規パスワード</p>
                    <input className='' type='password' {...register('password', rules)} />
                </li>
                {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
                <li className='w-[185px] mx-auto'>
                    <p>新規パスワードを確認</p>
                    <input className='' type='password' {...register('confirmPassword', { ...rules, ...confirmPasswordRules })} />
                </li>
                {errors.confirmPassword && <p className='text-sm text-red-600'>{errors.confirmPassword.message}</p>}
            </ul>
            <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-32 mt-6 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                <img className='w-6 mr-2' src={"/images/common/login.png"} alt="" />
                <p>更新</p>
            </button>
            {response ? <p className={response.state === 1 ? "text-green-500 mt-3 -mb-3 text-sm text-center"
                : "text-red-500" + ' mt-3 -mb-3 text-sm text-center'}>{response.message}</p> : null}
        </form>
    )
}

export default ChangePassword