"use client"

import { Login } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<Login>()
    const [errorMessage, setErrorMessage] = useState()

    const rules = {
        required: "*必須項目です",
        minLength: { value: 6, message: "*6文字以上で入力してください。" },
        maxLength: { value: 32, message: "*32文字以内で入力してください。" },
    }

    const onSubmit = (data: Login) => {

        //ログイン or 登録時に実行
        axios.post("/api/login.php", data).then((res) => {
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("token", res.data.token)

            //response が例外として帰ってこないので取り合えず代替のロジックで凌ぐここから
            Object.keys(res.data).length === 1 ? setErrorMessage(res.data.message) : window.location.href = "https://deakon.jp/mypage.html"
        }).catch((res) => {
            setErrorMessage(res.data.message)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid place-items-center'>
            <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600 [&>li]:mb-2'>
                <li>
                    <p>ユーザーID</p>
                    <input className='' type='text' {...register('id', rules)} />
                    {errors.id && <p className='text-sm text-red-600'>{errors.id.message}</p>}
                </li>
                <li>
                    <p>パスワード</p>
                    <input type="password" {...register("password", rules)} />
                    {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
                </li>
            </ul>
            <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-32 mt-4 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                <img className='w-6 mr-2' src={"/images/common/login.png"} alt="" />
                <p>ログイン</p>
            </button>
            {errorMessage ?
                (errorMessage === "登録されていないユーザーIDです" ?
                    <div className='mt-3 -mb-3 text-sm text-center'>
                        <p className='text-red-500'>{errorMessage}</p>
                        <a className='text-blue-300' href="/id-notification.html">IDの確認はこちら</a>
                    </div> :
                    <div className='mt-3 -mb-3 text-sm text-center'>
                        <p className='text-red-500'>{errorMessage}</p>
                        <a className='text-blue-300' href="/reset-password.html">パスワードの再設定はこちら</a>
                    </div>
                )
                : null}
        </form>
    )
}

export default Login