import { ClassName } from "@/types";

export type KeyValue = {key: string, value: string, isValid: boolean}
export type BaseFormType = { name: string, rule: (value: string, value2: any ) => boolean, message: string }
export type InputType = BaseFormType & {type: string, placeholder?: string}
export type SelectType = BaseFormType & {options: Options[]}
export type Options = {item: string, value: number}
