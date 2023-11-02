"use client"

import useGetFavoriteList from '@/hooks/useGetFavoriteList'
import useGetPartyCardRequirements from '@/hooks/useGetPartyCardRequirements'
import React, { useEffect, useState } from 'react'

function Favorite() {
  const favorites = useGetFavoriteList()
  const allEvents = useGetPartyCardRequirements()

  const [favoriteEvents, setFavoriteEvents] = useState()

  useEffect(() => {
    if (favorites && allEvents) {
      //setFavoriteEvents()
    }
  }, [favorites, allEvents])

  return (
    <div>Favorite</div>
  )
}

export default Favorite