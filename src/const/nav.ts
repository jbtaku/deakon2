import { Navigation } from "@/types"

export const news: Navigation = { title: "お知らせ", link: "/information.html" }
export const payment: Navigation = { title: "決済方法について", link: "/payment.html" }
export const flow: Navigation = { title: "お申し込みの流れ", link: "/flow.html" }
export const faq: Navigation = { title: "よくあるご質問", link: "/faq.html" }
export const contact: Navigation = { title: "お問い合わせ", link: "/contact.html" }
export const about: Navigation = { title: "デアコンとは？", link: "/about.html" }
export const partyList: Navigation = { title: "パーティー一覧", link: "/events.html" }
export const search: Navigation = { title: "パーティーを探す", link: "/search.html" }
export const wanted: Navigation = { title: "パーティー掲載情報募集", link: "/wanted.html" }
export const favorite: Navigation = { title: "お気に入り", link: "/favorite.html" }
export const history: Navigation = { title: "閲覧履歴", link: "/history.html" }
export const login: Navigation = {title: "ログイン", link: "/login.html"}
export const register: Navigation = {title: "会員登録", link: "/register.html"}
export const myPage: Navigation = {title: "マイページ", link: "/mypage.html"}
export const changePassword: Navigation = {title: "パスワードの再設定", link: "/change-password.html"}
export const updateUserInfo: Navigation = {title: "ユーザー情報の更新", link: "/update-account.html"}
export const idNotification: Navigation = {title: "IDの通知", link: "/id-notification.html"}
export const resetPassword: Navigation = {title: "パスワードの再設定", link: "/reset-password.html"}
export const privacyPolicy: Navigation = {title: "プライバシーポリシー", link: "/privacy-policy.html"}
export const termsOfUse: Navigation = {title: "利用規約", link: "/terms-of-use.html"}
export const tokusho: Navigation = {title: "特定商取引法に基づく表記", link: "/tokusho.html"}
export const companyInfo: Navigation = {title: "会社概要", link: "/company-info.html"}



export const navigationBasic: Navigation[] = [news, payment, flow, faq, contact]
export const navigationServices: Navigation[] = [about, partyList, search, /* wanted,  */favorite, history]
export const navigationPolicy: Navigation[] = [privacyPolicy, termsOfUse, tokusho, companyInfo]
