import { FormType, Select } from "@/types";
import { PREFECTURE_LIST } from "./prefecture";

const selectablePrefecture: Select[] = PREFECTURE_LIST.map((item) => {
    return { item: item, value: item }
})

export const tmpSearchItems: FormType[] = [
    { item: "フリーワードで検索", name: "freeWord", type: "text", placeholder: "フリーワードを入力" },
    { item: "開始日", name: "startDate", type: "date" }, { item: "終了日", name: "endDate", type: "date" },
    { item: "カテゴリー", name: "categorySlug", type: "text", select: [{ item: "カテゴリーを選択", value: "" }] },
    { item: "都道府県", name: "prefecture", type: "text", select: selectablePrefecture }
]