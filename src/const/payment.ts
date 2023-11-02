import { Payment } from "@/types";

export const PAYMENT: Payment[] = [{ name: "クレジットカード決済", contents: [{text: "PayPalによるカード決済を導入しています。"}, {text: "お客様ご自身でお手続きをお願い致します。"}] },
{name: "決済ボタン", contents: []},
{
    name: "銀行振込",
    contents: [{text: "各イベント予約を行っていただいた際、登録されているEmailアドレスに返信メールが届きますので、メールに記載された振込先の口座番号へお振込みください。", option: true}, 
    {text: "尚、振込手数料はお客様にてご負担願います。", option: true}, {text: "　", option: true}, {text: "お振込先"}, {text: "銀行振込み口座"}, {text: "南都銀行　高田支店"}, {text: "普通　2209871 出会い結婚・結婚ナビ相談所"}]
},
{ name: "PayPay払い", contents: [{text: "PayPayによる送金となります。決済金額をお送りください。"}, {text: "ID：deai4208"}] }]