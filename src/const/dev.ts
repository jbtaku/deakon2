
import { Category, Event2, NewsType, Reserved } from "@/types";

const categoryImg = "/images/category/"
const partyImg = "/images/party/"
export const D_CATEGORIES: Category[] = [{ categoryId: 1, img: categoryImg + "category_1.png", title: "20代向け", slug: "/" },
{ categoryId: 2, img: categoryImg + "category_2.png", title: "30代向け", slug: "/" },
{ categoryId: 3, img: categoryImg + "category_3.png", title: "40代向け", slug: "/" },
{ categoryId: 4, img: categoryImg + "category_4.png", title: "50代向け", slug: "/" },
{ categoryId: 5, img: categoryImg + "category_5.png", title: "バツイチ限定", slug: "/" },
{ categoryId: 6, img: categoryImg + "category_6.png", title: "ハイステータス", slug: "/" },
{ categoryId: 7, img: categoryImg + "category_7.png", title: "趣味コン", slug: "/" },
{ categoryId: 8, img: categoryImg + "category_8.png", title: "女性参加無料", slug: "/" },]

export const D_PARTY: Event2[] = [{
    title: "＜男性満席＞女性無料受付中♪【30代中心X 下社員安定収入男性編 婚活パーティー あいうえおかきくけこさしすせそ",
    eventId: 2, categorySlugs: [""],
    img: partyImg + "category_1.png", prefecture: "石川県", slug: "/",
    startDate: "2023-9-30", endDate: "2023-11-10", startTime: "18:00", endTime: "21:00",
    content: "fafd", locationLink: "/", locationName: "fsadfds", locationAddress: ""
}]

export const D_NEWS: NewsType[] = [
    { date: "2023-10-20", title: "悪天候に伴うパーティー開催状況あああああああああああああああああああああああああああああああ", content: "hello", slug: "" },
    { date: "2023-10-20", title: "悪天候に伴うパーティー開催状況あああああああああああああああああああああああああああああああ", content: "hello", slug: "" },
]

export const D_RESERVED: Reserved[] = [
    { id: "1", slug: "20", title: "こんにちは", seat: 2, status: 0, bookingId: 1 },
    { id: "1", slug: "20", title: "こんにちは", seat: 2, status: 1, bookingId: 2 },
    { id: "1", slug: "20", title: "こんにちは", seat: 2, status: 0, bookingId: 3 },
    { id: "1", slug: "20", title: "こんにちは", seat: 2, status: 2, bookingId: 3 },
    { id: "2", slug: "20", title: "こんにちは", seat: 2, status: 2, bookingId: 4 },
    { id: "1", slug: "20", title: "こんにちは", seat: 2, status: 2, bookingId: 5 },
]