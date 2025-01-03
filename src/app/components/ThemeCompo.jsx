"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeCompo({children}) {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted ] = useState(false)
 useEffect(() => setMounted(true), [])
 if(!mounted) return null
 
  return (
    <>
      <div className={theme}>
        <div className="bg-white text-gray-700 dark:text-slate-200 dark:bg-slate-900 min-h-screen">{children}</div>
      </div>
    </>
  )
}
