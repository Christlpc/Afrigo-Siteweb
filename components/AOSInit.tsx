"use client"

import { useEffect } from "react"
import "aos/dist/aos.css"

export default function AOSInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import dynamique de AOS uniquement côté client
      import("aos").then((AOSModule) => {
        const AOS = AOSModule.default
        AOS.init({
          duration: 800,
          easing: "ease-in-out-cubic",
          once: true,
          offset: 100,
          delay: 0,
          disable: false,
        })
      }).catch((error) => {
        console.warn("AOS initialization failed:", error)
      })
    }
  }, [])

  return null
}
