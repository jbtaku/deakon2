import { FormType, Login, SendItems } from "@/types"
import { PREFECTURE_LIST } from "./prefecture"
import { InputType, SelectType } from "@/types/Form"

export const USER_ID = "ユーザーID"
export const NAME = "お名前"
export const RUBY = "フリガナ"
export const ADDRESS = "住所"
export const PHONE = "電話番号"
export const MAIL = "メールアドレス"
export const CONFIRM_MAIL = "確認用メールアドレス"
export const INQUIRY_DETAILS = "お問い合わせ内容"
export const BIRTHDAY = "生年月日"
export const PREFECTURE = "都道府県"
export const CITY = "市町村"
export const PASSWORD = "パスワード"
export const CONFIRM_PASSWORD = "確認用パスワード"
export const FREE_WORD = "フリーワード検索"
export const START_DATE = "開始日"
export const END_DATE = "終了日"
export const CATEGORY = "カテゴリー"
export const SEND_CONTACT_ITEMS: SendItems = { text: "送信", img: "/images/common/contact.png" }
export const SEND_LOGIN_ITEMS: SendItems = { text: "ログイン", img: "/images/common/login.png" }
export const SEND_REGISTER_ITEMS: SendItems = { text: "登録", img: "/images/common/login.png" }
export const SEND_SEARCH_ITEMS: SendItems = { text: "検索", img: "/images/common/search.png" }

const rule = (value: string, value2: number) => value.length > value2

const confirmRule = (value: string, value2: string ) => value === value2


export const CONTACT_FORM: InputType[] = [
    { name: "name", type: "text", rule: rule, message: "ユーザーIDは半角英数字で6文字以上です" },
{ name: "ruby", type: "text", rule: rule, message: "フリガナは必須です" }, { name: "address", type: "text", rule: rule, message: "生年月日は必須です" },
{ name: "phone", type: "tel", rule: rule, message: "電話番号は必須です" },
{ name: "mail", type: "email", rule: rule, message: "メールアドレスは必須です" },
{ name: "confirmMail", type: "email", rule: rule, message: "確認用メールアドレスは必須です" },
{ name: "inquiryDetails", type: "text", rule: rule, message: "お問い合わせ内容を入力してください" }]

export const LOGIN_FORM: FormType[] = [{ item: "ユーザーID",  name: "userId", type: "text" },
{ item: "パスワード", name: "password", type: "password"}]

export const REGISTER_FORM: InputType[] = [{ name: "userId", type: "text", rule: rule, message: "ユーザーIDは半角英数字で6文字以上です" },
{ name: "name", type: "text", rule: rule, message: "お名前は必須です" }, { name: "birthday", type: "date", rule: rule, message: "生年月日は必須です" },
{ name: "address", type: "text", rule: rule, message: "住所は必須です" }, { name: "prefecture", type: "text", rule: rule, message: "都道府県は必須です" },
{ name: "city", type: "text", rule: rule, message: "市町村は必須です" }, { name: "phone", type: "tel", rule: rule, message: "電話番号は必須です" },
{ name: "mail", type: "email", rule: rule, message: "メールアドレスは必須です" }, { name: "confirmMail", type: "email", rule: confirmRule, message: "確認用メールアドレスは必須です" },
{ name: "password", type: "password", rule: rule, message: "パスワードは必須です" }, { name: "confirmPassword", type: "password", rule: confirmRule, message: "確認用パスワードは必須です" }]

export const SEARCH_FOEM: FormType[] = [{ item: "フリーワードで検索", name: "freeWord", type: "text", placeholder: "フリーワードを入力"},
{ item: "開始日" , name: "startDate", type: "date" },
{ item: "終了日" , name: "endDate", type: "date"},
{ item: "カテゴリー", name: "categoryId", select: [{ item: "カテゴリーを選択", value: 0 }], type: "select" },
{ item: "都道府県", name: "prefecture", select: [], type: "select"}]
