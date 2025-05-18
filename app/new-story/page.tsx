"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { TiptapEditor } from "@/components/editor/tiptap-editor"
import { AutoSaveIndicator } from "@/components/editor/auto-save-indicator"
import { useToast } from "@/hooks/use-toast"

export default function NewStoryPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [publishTo, setPublishTo] = useState("personal")
  const { toast } = useToast()

  // 자동 저장 기능
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (title || content) {
        saveStory()
      }
    }, 30000) // 30초마다 자동 저장

    return () => clearInterval(autoSaveInterval)
  }, [title, content])

  // 임시 저장 기능
  const saveStory = () => {
    if (!title && !content) return

    setIsSaving(true)

    // 실제 구현에서는 API 호출로 저장
    setTimeout(() => {
      // 로컬 스토리지에 임시 저장 (실제 구현에서는 서버에 저장)
      localStorage.setItem(
        "draft-story",
        JSON.stringify({
          title,
          content,
          excerpt,
          tags,
          lastSaved: new Date().toISOString(),
        }),
      )

      setIsSaving(false)
      setLastSaved(new Date())
    }, 1000)
  }

  // 저장된 임시 글 불러오기
  useEffect(() => {
    const savedDraft = localStorage.getItem("draft-story")
    if (savedDraft) {
      try {
        const { title, content, excerpt, tags, lastSaved } = JSON.parse(savedDraft)
        setTitle(title || "")
        setContent(content || "")
        setExcerpt(excerpt || "")
        setTags(tags || [])
        setLastSaved(lastSaved ? new Date(lastSaved) : null)
      } catch (error) {
        console.error("임시 저장 글을 불러오는 중 오류가 발생했습니다:", error)
      }
    }
  }, [])

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag) && tags.length < 5) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleManualSave = () => {
    saveStory()
    toast({
      title: "임시 저장 완료",
      description: "글이 임시 저장되었습니다.",
    })
  }

  const handlePublish = () => {
    // 실제 구현에서는 API 호출로 발행
    toast({
      title: "발행 완료",
      description: "글이 성공적으로 발행되었습니다.",
    })
    setIsPublishDialogOpen(false)

    // 발행 후 임시 저장 데이터 삭제
    localStorage.removeItem("draft-story")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">새 글 작성</h1>
          <div className="flex items-center gap-4">
            <AutoSaveIndicator isSaving={isSaving} lastSaved={lastSaved} />
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleManualSave}>
                임시저장
              </Button>
              <Dialog open={isPublishDialogOpen} onOpenChange={setIsPublishDialogOpen}>
                <DialogTrigger asChild>
                  <Button>발행하기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>글 발행하기</DialogTitle>
                    <DialogDescription>글을 발행하기 전에 최종 설정을 확인하세요.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="publish-title">제목</Label>
                      <Input
                        id="publish-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="publish-excerpt">요약</Label>
                      <Textarea
                        id="publish-excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="글의 요약을 입력하세요 (검색 결과와 소셜 미디어에 표시됩니다)"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>태그 (최대 5개)</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button type="button" onClick={() => handleRemoveTag(tag)} className="rounded-full">
                              <X className="h-3 w-3" />
                              <span className="sr-only">태그 삭제</span>
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="태그 추가"
                          disabled={tags.length >= 5}
                        />
                        <Button type="button" variant="outline" onClick={handleAddTag} disabled={tags.length >= 5}>
                          추가
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="publish-to">발행 위치</Label>
                      <Select value={publishTo} onValueChange={setPublishTo}>
                        <SelectTrigger id="publish-to">
                          <SelectValue placeholder="발행 위치 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">내 프로필</SelectItem>
                          <SelectItem value="tech-insights">테크 인사이트</SelectItem>
                          <SelectItem value="business-leader">비즈니스 리더</SelectItem>
                          <SelectItem value="creative-lab">크리에이티브 랩</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsPublishDialogOpen(false)}>
                      취소
                    </Button>
                    <Button onClick={handlePublish}>발행하기</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Input
              className="text-4xl font-bold border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <TiptapEditor content={content} onChange={setContent} autofocus={true} placeholder="내용을 입력하세요..." />
          </div>
        </div>
      </div>
    </div>
  )
}
