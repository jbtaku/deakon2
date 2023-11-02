import { D_NEWS } from '@/const/dev'
import { NewsType, Ticket3, TicketInfo, TicketInfo2 } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

function useGetTickets() {
    const isProduct = process.env.NODE_ENV === "production"
    const [ticket, setTicket] = useState<Ticket3[]>([])

    useEffect(() => {
        if (isProduct) {
            axios.get("/api/get-tickets.php").then((res: AxiosResponse<TicketInfo[]>) => {
                const tmp = res.data.map((item) => {
                    const { manTicket, womanTicket, charge, ...rest } = item
                    const tmpCharge = item.charge.split(".")[0]
                    
                    const arrangedCharge = tmpCharge === "0" ? "無料" : tmpCharge + "円"

                    if (item.manTicket === item.ticketName) {
                        const a: TicketInfo2 = { ...rest, manCharge: arrangedCharge, manRest: item.rest }
                        return a
                    } else {
                        const a: TicketInfo2 = { ...rest, womanCharge: arrangedCharge, womanRest: item.rest }
                        return a
                    }
                })
                let tmpArray: Ticket3[] = []
                tmp.map((item) => {
                    const tmp2: Ticket3[] = tmp.map((item2) => {
                        if (item.eventId === item2.eventId) {
                            return { ...item, ...item2 }
                        }
                    }).filter((elem): elem is Ticket3 => {
                        return (
                            elem !== undefined && elem?.manCharge !== undefined && elem?.womanCharge !== undefined &&
                            elem.manRest !== undefined && elem.womanRest !== undefined)
                    })
                    tmpArray.push(...tmp2)
                })
                setTicket(tmpArray)
            })
        } // else setTicketInfo()
    }, [])

    return ticket
}

export default useGetTickets