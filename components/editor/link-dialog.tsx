"use client"

import type React from "react"

import { useState, useEffect } from "react"
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

interface LinkDialogProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (url: string) => void
  onUnlink?: () => void
  initialUrl?: string
  isLinkActive?: boolean
}

export function LinkDialog({
  isOpen,
  onClose,
  onInsert,
  onUnlink,
  initialUrl = "",
  isLinkActive = false,
}: LinkDialogProps) {
  const [url, setUrl] = useState(initialUrl)

  useEffect(() => {
    if (isOpen) {
      setUrl(initialUrl)
    }
  }, [isOpen, initialUrl])

  const handleInsert = () => {
    if (url) {
      // URL 형식 검증 및 http:// 추가
      let processedUrl = url.trim()
      if (processedUrl && !processedUrl.startsWith("http://") && !processedUrl.startsWith("https://")) {
        processedUrl = "https://" + processedUrl
      }
      onInsert(processedUrl)
      onClose()
    }
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
          <DialogTitle>{isLinkActive ? "링크 편집" : "링크 삽입"}</DialogTitle>
          <DialogDescription>
            {isLinkActive ? "링크 URL을 수정하거나 제거하세요." : "텍스트에 링크를 추가하세요."}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          <div>
            {isLinkActive && onUnlink && (
              <Button
                variant="destructive"
                onClick={() => {
                  onUnlink()
                  onClose()
                }}
              >
                링크 제거
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleInsert} disabled={!url.trim()}>
              {isLinkActive ? "업데이트" : "삽입"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
