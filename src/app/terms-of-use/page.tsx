import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import Signature from '@/components/Signature'
import { termsOfUse } from '@/const/nav'
import React from 'react'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='利用規約' titleEn='TERMS OF USE' breadcrumbs={[termsOfUse]} />
            <SectionInnerBox className='text-sm w-[92%] max-w-[960px]'>
                <p className='my-6'>本利用規約（以下「本規約」といいます。）は、株式会社ラブチャレンジャー（以下「当事業所」といいます。)
                    が運営する「deakon」（以下「本サイト」といいます）にて提供する、イベント参加申込・購入等サービス(以下「本サービス」といいます。）
                    の提供条件並びに当事業所と本サービスを利用する全てのユーザー(以下「ユーザー」といいます。）との間の権利義務関係を定めるものです。
                    ユーザーは、本規約に同意の上、本サービスを利用するものとする。</p>
                <ol className='my-10 [&>li]:my-8 [&_h2]:text-base [&_h2]:mb-1 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-4'>
                    <li>
                        <h2>第１条（本サービスの定義）</h2>
                        <p>本サービスとは、ユーザーが、当サイト上に掲載される書店イベントその他のイベント（以下、「本イベント」といいます）の開催主であるイベント主催者に対し、
                            本イベントへの参加申込・チケット購入を行えるサービスをいいます。
                            本サービスを利用して本イベントの参加のためのチケット（以下、「参加チケット」といいます）を購入する取引は、当該イベントの主催者とユーザーの間の直接の取引となります。
                            当事業所は、当該取引の当事者とならず、取引に関する一切の責任を負いません。そのため、取引に際して、ユーザーにトラブルが生じた場合、ユーザーは、主催者との間で協議の上、
                            解決をするものとし、ユーザーは自己の責任において本サービスを利用するものとします。当事業所は、主催者とのトラブル及び本イベントの内容について何らの保証も行わないものとします。
                            本イベント等に関する問い合わせはユーザーが主催者に対して直接行うものとし、当事業所はこれに関して一切関与しないものとします。
                            ただし、本サイトに関する問い合わせは、ユーザーが当事業所に対し行うものとします。</p>
                    </li>
                    <li>
                        <h2>第２条（会員登録）</h2>
                        <ul>
                            <li>ユーザーは本サービスの利用に際して会員登録を希望する場合、本規約を承認のうえ当事業所所定の手続きにより会員登録を申請するものとします。
                                また会員登録にあたっては本人確認が必要となります。</li>
                            <li> 前項で会員登録が完了したユーザー(以下「会員」といいます。) は、随時退会可能です。但し、その場合は本サイト上又は当事業所指定のサイト上で案内される退会手続きに従うものとします。</li>
                            <li>本サービスにおいて、会員は1つのID・パスワードのみを使用できるものとします。会員が複数のID・パスワードを使用しているおそれがあると当事業所が判断した場合、
                                当事業所は当該会員に対して第11条で定める不許諾等を講じることができるものとし、当該会員はこれに対して一切異議を申し立てず、
                                またこれにより損害又は不利益を被ったとしても、当事業所を免責し、賠償請求その他一切の請求を行わないものとします。
                                但し、当事業所に故意又は重過失がありこれにより損害を生じた場合は、かかる損害について賠償します。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第３条（利用資格）</h2>
                        <p>本サービスを利用できるユーザーは、次に掲げる条件をいずれも満たす個人に限るものとします。
                            当事業所は、ユーザーが本サービスを利用したことをもって、
                            ユーザー自らが本条に定める利用資格を満たすことを表明し、保証したものとみなすものとします。</p>
                        <ul>
                            <li>本規約、その他当事業所の定める条件を承諾すること</li>
                            <li>満１８歳以上の独身の方で、日本国内に一定の住所を有すること</li>
                            <li>被保佐人、被後見人でないこと</li>
                            <li>暴力団等の反社会的勢力関係者でないこと</li>
                            <li>過去に本サービスまたは当事業所が管理運営する他のサービスの利用にあたり、当事業所から警告、退会、その他これらに相当する指摘をされていないこと</li>
                            <li>その他、当事業所が本サービスの利用を不適当と判断しないこと</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第４条（支払い方法）</h2>
                        <p>ユーザーは、本イベントの参加に際して、以下の各号の定めに従い、参加料金を支払う。</p>
                        <ul>
                            <li>本イベントの予約時に決済をする場合（以下「事前決済」という）においては、クレジットカード、その他の当事業所が定める決済方法</li>
                            <li>本イベントの参加時に決済をする場合（以下「現地決済」という）においては、現金、クレジットカード決済、その他イベント主催者が定める方法</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第５条（クレジットカード決済）</h2>
                        <ul>
                            <li>クレジットカード決済において利用できるクレジットカードは、
                                ユーザー（予約をする者と実際にサービスを利用する者が異なる場合には、
                                当該予約をする者を指すものとし、以下本章において同様とする）本人名義のクレジットカードに限るものとする。</li>
                            <li>ユーザーは、他人のクレジットカードの利用、虚偽のクレジットカード情報の入力、その他当事業所が不適切と認める行為を行ってはならない。
                                当事業所は、ユーザーがかかる行為を行ったことにより生じた損害について、当該ユーザーに対して賠償を求めることができるものとする。</li>
                            <li>ユーザーが決済に利用しまたは利用を選択したクレジットカードにつき、
                                カード会社が何らかの理由によりその利用を拒否した場合または当事業所が当事業所所定の基準により不適切な利用であると判断した場合、
                                当事業所は、ユーザーの同意を得ることなく、決済方法の変更、予約の取消、その他当事業所が必要と認める措置をとることができるものとし、
                                これによりユーザーに生じた損害について一切責任を負わない。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第６条（参加チケット代金の変更について）</h2>
                        <p>ユーザーは、参加チケット代金が変更されることを予め了承するものとします。
                            なお、変更後の料金は、変更後に参加チケットを購入したユーザーにのみ適用され、
                            変更前に参加チケットを購入したユーザーには変更前の料金が適用されます。</p>
                    </li>
                    <li>
                        <h2>第７条（参加チケット代金の返金）</h2>
                        <ul>
                            <li>本イベント開催中止等に伴うユーザーへの告知は本イベントの主催者が行い、
                                当事業所は開催中止等に伴う責任は一切負わないものとします。
                                但し、当事業所又は当事業所が返金業務を委託する第三者（以下、「当事業所等」といいます）
                                は本イベントの主催者の依頼により販売した参加チケットの開催中止等に伴う返金業務を代行することがあります。
                                なお、以下の各号に該当する場合は返金しないものとします。<br />
                                (１）　本イベントが開催されたにもかかわらず、ユーザーが参加しなかった場合。<br />
                                (２）　交通機関の影響によりユーザーが参加しなかった場合。</li>
                            <li>
                                前項に従い当事業所等が返金業務を行う場合、その方法については別途当事業所等が定める方法に従うものとします。
                                本イベント中止に伴うユーザーへの返金額は、当該本イベントにかかる参加チケット代金とし、交通費、宿泊費、通信費、振込手数料等の返金は行いません。
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>第８条（キャンセルについて）</h2>
                        <p>1.予約フォームに記載のキャンセル規約が適用されます。</p>
                        <ul>
                            <li>事前決済 （deakon内でクレジットカード決済を行った場合）：
                                イベント開催日から起算して３日前の０:００よりキャンセル料として参加費全額分が発生致します。
                                ４日前の２３:５９まではキャンセル料は発生致しません。</li>
                            <li>その他： deakonキャンセルポリシーもしくはイベント主催者のキャンセルポリシーに準拠致します。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第９条（本イベント等に関する情報の非保証）</h2>
                        <p>本サービスにおいて当事業所又は当事業所以外の第三者より提供される本サービスに関する情報について、
                            当事業所はその最新性、真実性、合法性、安全性、適切性、有用性の確実性等、本サービスによる効果一切について何ら保証しないものとします。</p>
                    </li>
                    <li>
                        <h2>第１０条（免責事項）</h2>
                        <ul>
                            <li>当事業所は、ユーザーが使用する機器、設備又はソフトウェアが本サービスの利用に適さない場合であっても、サービスの変更、改変等を行う義務を負わないものとします。</li>
                            <li>当事業所は、アクセス過多、その他予期せぬ要因に基づく本サービスの表示速度の低下や障害等によって生じたいかなる損害についても、
                                一切責任を負いません。但し、当事業所に故意又は重過失がありこれにより損害を生じた場合は、かかる損害について賠償します。</li>
                            <li>当事業所は、ユーザーが本サービスを利用する際に発生する通信費用や設備投資について、一切負担しないものとします。</li>
                            <li>当事業所は、本サービスに関連して送信される電子メール及びＷＥＢコンテンツに、コンピュータウィルス等の有害なものが含まれていないことを保証しないものとします。</li>
                            <li>当事業所が相当の安全策を講じたにもかかわらず、以下の事由により損害が生じた場合、当事業所はいかなる責任も負わないものとします。<br />
                                （１）通信回線やコンピュータ等に障害が生じたことにより、本サービスのシステムの中断・遅滞・中止等によって発生した損害<br />
                                （２）本サイトが改竄されたことにより生じた損害<br />
                                （３）本サービスに関するデータへの不正アクセスにより生じた損害
                            </li>
                            <li>当事業所は、ユーザーが本サービスを利用できなかったことにより発生した一切の損害について、いかなる責任も負わないものとします。</li>
                            <li>当事業所は、本サイトにおける誤解を生じやすい記載や誤植に関して発生した損害について、いかなる責任も負わないものとします。</li>
                            <li>上記各項記載事項の他、本サービスの利用にあたりユーザーに発生した一切の損害について、当事業所は原則として責任を負いません。
                                但し、当事業所が債務不履行、不法行為その他一切の行為によりユーザーに損害を与えた場合は、
                                当事業所は、ユーザーについて発生した直接かつ通常の損害を購入した本イベントの参加チケットの対価を上限として賠償します（
                                但し、当事業所に故意又は重過失がありこれにより損害を生じた場合は、かかる上限を超えて賠償します）。
                                又、当事業所の責任に帰すべからざる事由から発生した損害、当事業所の予見の有無にかかわらず、特別の事情から生じた損害、
                                逸失利益については、当事業所は一切責任を負わないものとします
                                （但し、当事業所に故意又は重過失がありこれにより損害を生じた場合は、かかる損害について賠償します）。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第１１条(本サービス利用の不承諾）</h2>
                        <p>当事業所は、ユーザーに以下各号の事由が認められると判断した場合、本サービスの利用を許諾せず、
                            又会員の退会処置、本サービスの全部又は一部の利用停止、購入済の参加チケットのキャンセル処理、
                            その他当事業所が必要と判断する措置（以下、「不許諾等」といいます）を講じることができるものとし、
                            ユーザーはこれに対して理由の開示を求めること及び一切の異議の申し立てをすることができず、
                            又これにより損害又は不利益を被ったとしても、当事業所を免責し、賠償請求その他一切の請求を行わないものとします。
                            但し、当事業所に故意又は重過失がありこれにより損害を生じた場合は、かかる損害について賠償します</p>
                        <ul>
                            <li>過去を含め本規約、本イベントの主催者が定める規約等、又は法令に違反したとき</li>
                            <li>参加チケット購入時の登録事項に虚偽の内容又は不足があったとき又はそのおそれがあるとき</li>
                            <li>ユーザーが指定した電子メールアドレスが不通のとき、又は当事業所からの照会、資料提出等の要請に対して速やかに対処しないとき</li>
                            <li>クレジットカードの与信確認に問題が生じたとき</li>
                            <li>いわゆる反社会的勢力もしくは反社会的活動を行う団体に所属し、又はこれらと密接な関係を有するとき</li>
                            <li>ユーザーに対し、差押、仮差押、仮処分、強制執行、破産等の申し立てがなされた場合、又は、ユーザーが自ら破産、債務整理の申し立てをした場合</li>
                            <li>その他、当事業所が不許諾等を行うのが相当と判断した場合</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第１２条（禁止事項）</h2>
                        <ul>
                            <li>犯罪行為若しくは犯罪行為に結びつく行為又はそのおそれのある行為。</li>
                            <li>当事業所又は第三者の著作権、商標権等の知的財産権を侵害する行為又はそのおそれのある行為。</li>
                            <li>当事業所又は第三者の財産権、プライバシー権、肖像権その他の権利を侵害する行為又はそのおそれのある行為。</li>
                            <li>当事業所又は第三者を差別又は誹謗中傷する行為。</li>
                            <li>本サービスを営利目的で利用する行為。</li>
                            <li>システムへの不正アクセス等本サービスの運営を妨げる行為。</li>
                            <li>当事業所又は第三者の信用を損なう行為。</li>
                            <li>他人になりすまして情報等を送信する行為。</li>
                            <li>法令、公序良俗若しくは本規約に違反する行為又はそのおそれのある行為。</li>
                            <li>本サービスとは関係のない団体やサービス、活動にたいしての勧誘行為。</li>
                            <li>商品等の購入申請を行う際に本サイト上に掲示される規約や注意事項等に反する行為、又はそのおそれのある行為。</li>
                            <li>ユーザーが複数の会員登録申請を行う行為、又はそのおそれがある行為。</li>
                            <li>合理的な理由なくイベントに途中退場する行為。</li>
                            <li>申込時に虚偽の情報を登録する行為。</li>
                            <li>他参加者に迷惑となる行為。</li>
                            <li>開催されるイベントの趣旨にそぐわない行為。</li>
                            <li>その他当事業所が不適切と判断する行為。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第１３条（個人情報の取扱）</h2>
                        <ul>
                            <li>当事業所は、別途定める「プライバシーポリシー」に則り、
                                ユーザーの個人情報を取り扱うものとします。なお、当事業所は、ユーザーからの問い合せ内容をもとに、
                                個人を特定できない形式による統計データを作成し、当該データを利用させていただくことがあります。</li>
                            <li>deakonは書店等のイベントに関する情報を掲載しておりますが、掲載されているイベントは、
                                主催者に対してユーザーが直接申し込むものとなります。お客様が入力された情報は、
                                当事業所より主催者に対して提供され、ユーザーはこの点について異議なく同意するものとします。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>第１４条（知的財産権）</h2>
                        <p>本サイト上を構成する文章、画像、プログラムその他のデータ等についての一切の権利
                            （所有権、知的財産権、肖像権、パブリシティー権等）は、当事業所又は当該権利を有する第三者に帰属するものとし、
                            ユーザーは、方法又は形態の如何を問わず、これらを当事業所に無断で複製、複写、転載、転送、蓄積、販売、
                            出版その他ユーザー個人の私的利用の範囲を超えて使用してはならないものとします。</p>
                    </li>
                    <li>
                        <h2>第１５条（権利義務譲渡の禁止）</h2>
                        <p>ユーザーは、本規約上の地位に基づく一切の権利義務を、当事業所の事前の書面による承諾なく、第三者に譲渡もしくは貸与し、又は担保に供してはならないものとします。</p>
                    </li>
                    <li>
                        <h2>第１６条（本規約の変更）</h2>
                        <p>当事業所は、変更の内容及び変更の効力発生時期を、当該効力発生時期までに本サイト上において告知することにより、 本規約の内容を変更することができるものとし、
                            ユーザーには変更後の本規約の内容が適用されるものとします。
                            告知された効力発生時期以降にユーザーが本サイトを利用した場合には、ユーザーは、本規約の変更に同意したものとみなします。</p>
                    </li>
                    <li>
                        <h2>第１７条（本規約の有効性）</h2>
                        <p>本規約の規定の一部が法令に基づいて無効と判断されても、本規約のその他の規定は有効とします。
                            本規約の規定の一部があるユーザーとの関係で無効とされ、又は取り消された場合でも、本規約はその他のユーザーとの関係では有効とします。</p>
                    </li>
                    <li>
                        <h2>第１８条（準拠法及び管轄裁判所）</h2>
                        <p>本規約の準拠法は、日本法とします。 ユーザーと当事業所の間で訴訟の必要が生じた場合、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
                    </li>
                    <li>
                        <h2>■著作権について</h2>
                        <p>本サイトの掲載情報(テキスト・画像等)の著作権(もしくは知的財産権)は特に記載されているもの以外は、
                            deakonに帰属します。本サイト上の掲載情報の全部または一部について、私的使用を除き、無断で転載・複製する事は禁止します。
                            但し、当サイトの紹介をして頂く方法として写真等をご利用される場合はこの限りではありません。(直接リンクせず、ダウンロードしてからご使用下さい。)
                        </p>
                    </li>
                    <li>
                        <h2>■免責事項</h2>
                        <p>本サイトに記載された情報の正確性については万全を期しておりますが、誤解を生じやすい記載や誤植を含む可能性があります。
                            その際に生じたいかなる損害に関しても、deakonは責任を負いません。 本サイトに記載された情報は、予告無しに変更または更新される事があり、
                            deakonは本サイトに記載された情報やプログラムを予告無しに 変更する事ができます。
                            上記の事由に関わらず、本サイトの記載事項・リンク先にて発生した損害につきましては一切の責任を負いかねます。</p>
                    </li>
                </ol>
                <Signature />
            </SectionInnerBox>
        </div>
    )
}

export default page