import { ReactNode } from "react"

export type ClassName = { className?: string }
export type Children = { children: ReactNode }
export type Option = { option?: string | number | boolean }
export type OptionalText = { text: string } & Option
export type Navigation = { title: string, link: string }
export type DateTime = { startDate: string, endDate: string, startTime: string, endTime: string }
export type Category = { categoryId: number, title: string, img: string, slug: string }
export type EventId = {eventId: number}


export type Ticket3 = Required<TicketInfo2> & EventId


export type CategoryTitleSlug = { categoryTitle: string, categorySlug: string }
export type EventRequirements = Event2 & Ticket3 & { categoryTitleSlug : CategoryTitleSlug[]}

export type Event = {
    title: string , categorySlug: string
    img: string, prefecture: string, slug: string, eventId: number
    content: string, locationLink: string, locationName: string, locationAddress: string
} & DateTime

export type Event2 = Omit<Event, "categorySlug"> & {categorySlugs: string[]}

export type SearchedData = {
    title: string, img: string, prefecture: string, eventId: number, categorySlug: string,
    content: string, locationLink: string, locationName: string, locationAddress: string,
    manAge: string, womanAge: string, manTicket: string, womanTicket: string, slug: string
} & DateTime

export type TicketInfo = {
    eventId: number, ticketId: number, ticketName: string, charge: string,
    manAge: string, womanAge: string, manTicket: string, womanTicket: string,
    seat: number, reserved: number, rest: number
}

export type TicketInfo2 = { manCharge?: string, womanCharge?: string, manRest?: number, womanRest?: number } & Omit<TicketInfo, "charge" | "manTicket" | "womanTicket">


export type Requirements = { age: string, charge: string, restSeat: number }
export type NewsType = { date: string, title: string, slug: string, content: string }
export type Payment = { name: string, contents: OptionalText[] }

export type Reserved = {
    id: string, slug: string, title: string,
    seat: number, status: number, bookingId: number
}


export type Favorite = { eventId: number }

/* フォームに関する型 */
export type SendItems = { text: string, img: string }
export type Select = { item: string, value: string | number }

export type FormType = { item: string, name: string, type: string, select?: Select[], placeholder?: string }


export type Contact = { name: string, ruby: string, address: string, phone: string, mail: string, confirmMail: string, inquiryDetails: string }

export type Login = {
    id: string, name: string, birthday: string, address: string, prefecture: string, city: string, zip: string
    phone: string, mail: string, confirmMail: string, password: string, confirmPassword: string
}

export type Search = {
    freeWord: string, startDate: string, endDate: string, categorySlug: string, prefecture: string
}