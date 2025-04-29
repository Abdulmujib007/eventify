'use client'

import { useParams } from "next/navigation"

function EachEventPage() {
    const params = useParams()
    console.log(params.id)
  return (
    <div>Each event page</div>
  )
}

export default EachEventPage