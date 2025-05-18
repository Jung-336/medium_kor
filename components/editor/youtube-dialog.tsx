"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface YoutubeDialogProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (url: string) => void
}

export function YoutubeDialog({ isOpen, onClose, onInsert }: YoutubeDialogProps) {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")

  const validateYoutubeUrl = (url: string) => {
    // YouTube URL 형식 검증 (간단한 버전)
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/
    return youtubeRegex.test(url)
  }

  const handleInsert = () => {
    if (!url.trim()) {
      setError("URL을 입력해주세요.")
      return
    }

    if (!validateYoutubeUrl(url)) {
      setError("유효한 YouTube URL이 아닙니다.")
      return
    }

    setError("")
    onInsert(url)
    setUrl("")
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleInsert()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>YouTube 동영상 삽입</DialogTitle>
          <DialogDescription>YouTube 동영상 URL을 입력하세요.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-2">
            <Label htmlFor="youtube-url">YouTube URL</Label>
            <Input
              id="youtube-url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setError("")
              }}
              placeholder="https://www.youtube.com/watch?v=..."
              onKeyDown={handleKeyDown}
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <p className="text-xs text-muted-foreground mt-2">
              예: https://www.youtube.com/watch?v=dQw4w9WgXcQ 또는 https://youtu.be/dQw4w9WgXcQ
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleInsert}>삽입</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
