import { EventRequirements } from "@/types"

type Props = EventRequirements

function PartyCard({ title, img, eventId, prefecture, slug, startDate, startTime,
    categoryTitleSlug, manAge, womanAge, manRest, womanRest, manCharge, womanCharge }: Props) {
    const baseUri = "/wordpress/events/"

    let manOptionStyle = ""
    let womanOptionStyle = ""
    let manMessage = ""
    let womanMessage = ""
    const full = "border-2 border-red-600 rounded-md bg-white px-2 py-px text-red-600 w-max"
    const fewLeft = " bg-red-600 rounded-md px-2 py-1 text-white w-max"

    const dayJp = ["日", "月", "火", "水", "木", "金", "土"]
    const date = new Date(startDate)
    const day = date.getDay()

    const tmpStartDate = startDate.split("-")
    const arrangedStartDate = tmpStartDate[0] + "年" + tmpStartDate[1] + "月" + tmpStartDate[2] + "日"

    const tmpStartTime = startTime.split(":")
    const arrangedStartTime = tmpStartTime[0] + ":" + tmpStartTime[1]
    const prefectureStyle = prefecture.length > 3 ? "text-sm top-[22px] left-0" : "top-[20px] left-[2px]"


    if (manRest == 0) {
        manOptionStyle = full
        manMessage = "満席"
    } else if (manRest && manRest <= 4) {
        manOptionStyle = fewLeft
        manMessage = "残りわずか"
    }

    if (womanRest == 0) {
        womanOptionStyle = full
        womanMessage = "満席"
    } else if (womanRest && womanRest <= 4) {
        womanOptionStyle = fewLeft
        womanMessage = "残りわずか"
    }

    return (
        <div className='w-[329px] sm:w-[40vw] 2md:w-[28.6vw] lg:w-[290px] mx-auto shadow-2xl shadow-red-300' style={{borderRadius: "16px 16px 16px 16px"}}>
            <div className="relative h-[188px] sm:h-[23vw] 2md:h-[16.4vw] lg:h-[166px]">
                <img className="absolute w-full h-auto aspect-[145/87] object-cover left-[50%] -translate-x-[50%]" src={img} alt={title} />
                <img className="w-[72px] absolute z-20 top-[13px] -left-[9px] " src={"/images/common/ribbon.png"} alt="リボン" />
                <h2 className={"absolute z-30 text-white " + prefectureStyle}>{prefecture}</h2>
                <span className="block absolute z-40 -bottom-[10px] h-[7px] w-full bg-gradient-to-r from-red-400 via-red-300 to-yellow-200" />
            </div>
            <div className="bg-white px-3 pt-3 pb-6" style={{borderRadius: "0px 0px 16px 16px"}}>
                <div className="flex items-center my-2">
                    <img className="w-6 mr-2" src="/images/common/calendar.png" alt="カレンダー" />
                    <p className="text-sm font-semibold">{arrangedStartDate + "(" + dayJp[day] + ") " + arrangedStartTime + "〜"}</p>
                </div>
                <div className="flex items-center my-2 truncate">
                    <img className="w-6 mr-2" src="/images/common/category.png" alt="カテゴリー" />
                    {categoryTitleSlug.map((item, index) => {
                        return (
                            <a key={item.categorySlug} href={"/categorized-events.html?cat=" + item.categorySlug}>
                                <p className="text-sm font-semibold">{index > 0 ? "," + item.categoryTitle : item.categoryTitle}</p>
                            </a>
                        )
                    })}
                </div>
                <div className="w-full">
                    <p className="truncate py-2">{title}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px] sm:text-[1.8vw] 2md:text-[12px]">
                    <div className="border-2 border-red-400 rounded-md bg-red-100 p-1">
                        <div className="flex items-center justify-between h-8 mb-px">
                            <p className="font-semibold">女性</p>
                            <p className={womanOptionStyle}>{womanMessage}</p>
                        </div>
                        <p>年齢：{womanAge}</p>
                        <p>料金：{womanCharge}</p>
                    </div>
                    <div className="border-2 border-blue-400 rounded-md bg-blue-100 p-1">
                        <div className="flex items-center justify-between h-8 mb-px">
                            <p className="font-semibold">男性</p>
                            <p className={manOptionStyle}>{manMessage}</p>
                        </div>
                        <p>年齢：{manAge}</p>
                        <p>料金：{manCharge}</p>
                    </div>
                </div>
                <a className="group block border-2 border-gray-600 rounded-md py-2 px-10 
                text-center w-[70%] mx-auto mt-4 sm:text-[2vw] md:text-base hover:bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 hover:shadow-lg" href={baseUri + slug}>
                    <p className="text-gray-600 group-hover:text-gray-900 group-hover:scale-105">詳細を見る</p>
                </a>
            </div>
        </div>
    )
}

export default PartyCard