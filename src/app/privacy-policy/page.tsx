import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import Signature from '@/components/Signature'
import { privacyPolicy } from '@/const/nav'
import React from 'react'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='プライバシーポリシー' titleEn='PRIVACY POLICY' breadcrumbs={[privacyPolicy]} />
            <SectionInnerBox className='text-sm w-[92%] max-w-[860px]'>
                <p className='my-6'>株式会社ラブチャレンジャー（以下、当社といいます）では、知性と個性を十二分に発揮できる創造性豊かなインターネット社会の中で、 お客様からの信頼を第一と考え、お客様個人に関わる情報を正確、かつ、機密に取り扱うことは、当社にとって重要な責務であると考えております。
                    そのために、お客様の個人情報に関するプライバシーポリシーを制定し、個人情報の取扱い方法について、全社への徹底を実践してまいります。その内容は以下の通りです。</p>
                <ol className='my-10 [&>li]:my-8 [&_h2]:text-base [&_h2]:mb-1 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-4'>
                    <li>
                        <h2>1.個人情報の考え方について</h2>
                        <p>個人情報とは、以下の情報により特定の個人として識別できる、照合できるものをいいます。</p>
                        <ul>
                            <li>お名前、性別、ご職業、お電話番号、ご住所、メールアドレス</li>
                            <li>個人別に付与されたIDナンバー、パスワード、その他の記号等</li>
                            <li>また、この情報のみでは識別できないが、他の情報と容易に照合することができ、それにより特定の個人を識別できるものを含む</li>
                        </ul>
                    </li>
                    <li>
                        <h2>2.個人情報の収集・利用目的について</h2>
                        <p>お客様にご提供いただいた個人情報は次の目的の範囲内で利用させていただきます。</p>
                        <ul>
                            <li>メールまたは電話でのお問合せ対応のため</li>
                            <li>新規会員登録に関する個人情報</li>
                            <li>当社が主催するイベントの運営管理、参加者の出欠管理のため</li>
                            <li>当社関連情報のご案内及びメール配信のため</li>
                            <li>その他なんらかの理由で利用者の皆様と接触する必要が生じた場合</li>
                        </ul>
                    </li>
                    <li>
                        <h2>3.個人情報の管理について</h2>
                        <p>お客様の個人情報は、第三者がアクセスできない安全な環境下で管理しています。<br />
                            データの破壊、改ざん、漏洩等が起こらないように体制を整えております。</p>
                    </li>
                    <li>
                        <h2>4.取得した個人情報の利用と開示</h2>
                        <p>法令等に正当な理由がある場合をのぞき、情報送信者の同意なく弊社の協力先や第三者へ当サイト経由で取得した個人情報を提供することはありません。</p>
                    </li>
                    <li>
                        <h2>5.個人情報の照会・訂正・削除について</h2>
                        <p>お客様からご提供いただいた個人情報に関して、照会、訂正、削除を要望される場合は、ウェブサイトに設置されているお問合せ対応窓口にご請求下さい。<br />
                            個人情報漏洩防止の観点から、当該ご請求がお客様ご本人によるものであることが確認できた場合に限り、合理的な期間内に、お客様の個人情報を開示、訂正、削除いたします。</p>
                    </li>
                </ol>
                <Signature />
            </SectionInnerBox>
        </div>
    )
}

export default page