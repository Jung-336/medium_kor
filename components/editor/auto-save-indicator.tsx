"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

interface AutoSaveIndicatorProps {
  isSaving: boolean
  lastSaved: Date | null
}

export function AutoSaveIndicator({ isSaving, lastSaved }: AutoSaveIndicatorProps) {
  const [timeAgo, setTimeAgo] = useState<string>("")

  useEffect(() => {
    if (!lastSaved) return

    const updateTimeAgo = () => {
      const now = new Date()
      const diffInSeconds = Math.floor((now.getTime() - lastSaved.getTime()) / 1000)

      if (diffInSeconds < 60) {
        setTimeAgo("방금 전")
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60)
        setTimeAgo(`${minutes}분 전`)
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600)
        setTimeAgo(`${hours}시간 전`)
      } else {
        const days = Math.floor(diffInSeconds / 86400)
        setTimeAgo(`${days}일 전`)
      }
    }

    updateTimeAgo()
    const interval = setInterval(updateTimeAgo, 60000) // 1분마다 업데이트

    return () => clearInterval(interval)
  }, [lastSaved])

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      {isSaving ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>저장 중...</span>
        </>
      ) : lastSaved ? (
        <>
          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
          <span>마지막 저장: {timeAgo}</span>
        </>
      ) : null}
    </div>
  )
}
