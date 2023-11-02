"use client"

import { Login } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Register() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Login>()
    const [errorMessage, setErrorMessage] = useState()

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

    const confirmPasswordRules = {
        validate: (value: string) => {
            return (
                value === getValues("password") || "*パスワードが一致しません"
            )
        }
    }

    const onSubmit = (data: Login) => {

        //ログイン or 登録時に実行
        axios.post("/api/register.php", data).then((res) => {
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
                    <input className='' type='text' {...register('id', { ...requiredRules, ...lengthRules })} />
                    {errors.id && <p className='text-sm text-red-600'>{errors.id.message}</p>}
                </li>
                <li>
                    <p>お名前</p>
                    <input className='' type='text' {...register('name', requiredRules)} />
                    {errors.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
                </li>
                <li>
                    <p>生年月日</p>
                    <input className='' type='date' {...register('birthday', requiredRules)} />
                    {errors.birthday && <p className='text-sm text-red-600'>{errors.birthday.message}</p>}
                </li>
                <li>
                    <p>郵便番号</p>
                    <input className='text' type='' {...register('zip', requiredRules)} />
                    {errors.zip && <p className='text-sm text-red-600'>{errors.zip.message}</p>}
                </li>
                <li>
                    <p>住所</p>
                    <input className='text' type='' {...register('address', requiredRules)} />
                    {errors.address && <p className='text-sm text-red-600'>{errors.address.message}</p>}
                </li>
                <li>
                    <p>都道府県</p>
                    <input className='' type='text' {...register('prefecture', requiredRules)} />
                    {errors.prefecture && <p className='text-sm text-red-600'>{errors.prefecture.message}</p>}
                </li>
                <li>
                    <p>市町村</p>
                    <input className='' type='text' {...register('city', requiredRules)} />
                    {errors.city && <p className='text-sm text-red-600'>{errors.city.message}</p>}
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
                    <p>パスワード</p>
                    <input type="password" {...register("password", { ...requiredRules, ...lengthRules })} />
                    {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
                </li>
                <li>
                    <p>確認用パスワード</p>
                    <input type="password" {...register("confirmPassword", { ...requiredRules, ...lengthRules, ...confirmPasswordRules })} />
                    {errors.confirmPassword && <p className='text-sm text-red-600'>{errors.confirmPassword.message}</p>}
                </li>
            </ul>
            <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-32 mt-6 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                <img className='w-6 mr-2' src={"/images/common/login.png"} alt="" />
                <p>登録</p>
            </button>
            {errorMessage ? <p className='text-red-500 mt-3 -mb-3 text-sm text-center'>{errorMessage}</p> : null}
        </form>
    )
}


export default Register