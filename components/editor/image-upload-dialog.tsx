"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, UploadCloud } from "lucide-react"
import { uploadImage } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface ImageUploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (url: string, alt: string) => void
}

export function ImageUploadDialog({ isOpen, onClose, onInsert }: ImageUploadDialogProps) {
  const [activeTab, setActiveTab] = useState("upload")
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [unsplashQuery, setUnsplashQuery] = useState("")
  const [unsplashImages, setUnsplashImages] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // 파일 미리보기 생성
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreviewUrl(objectUrl)

      // 파일 이름을 기본 대체 텍스트로 설정 (확장자 제외)
      const fileName = selectedFile.name.split(".").slice(0, -1).join(".")
      if (!imageAlt) {
        setImageAlt(fileName)
      }
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)

    try {
      // FormData 생성
      const formData = new FormData()
      formData.append("file", file)

      // 서버 액션을 사용한 업로드
      startTransition(async () => {
        const result = await uploadImage(formData)

        if (result.error) {
          toast({
            title: "업로드 실패",
            description: result.error,
            variant: "destructive",
          })
        } else if (result.success && result.url) {
          onInsert(result.url, imageAlt || file.name)
          resetAndClose()
          toast({
            title: "업로드 성공",
            description: "이미지가 성공적으로 업로드되었습니다.",
          })
        }
        setIsUploading(false)
      })
    } catch (error) {
      console.error("이미지 업로드 중 오류:", error)
      toast({
        title: "업로드 실패",
        description: "이미지 업로드 중 오류가 발생했습니다.",
        variant: "destructive",
      })
      setIsUploading(false)
    }
  }

  const handleUrlInsert = () => {
    if (imageUrl) {
      onInsert(imageUrl, imageAlt)
      resetAndClose()
    }
  }

  const searchUnsplash = async () => {
    if (!unsplashQuery) return

    setIsSearching(true)

    try {
      // Unsplash API 엔드포인트 (실제 구현에서는 환경 변수 사용)
      const response = await fetch(`/api/unsplash-search?query=${encodeURIComponent(unsplashQuery)}`)
      const data = await response.json()

      if (data.results) {
        setUnsplashImages(data.results)
      } else {
        toast({
          title: "검색 실패",
          description: "Unsplash 이미지 검색 중 오류가 발생했습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Unsplash 검색 중 오류:", error)
      toast({
        title: "검색 실패",
        description: "Unsplash 이미지 검색 중 오류가 발생했습니다.",
        variant: "destructive",
      })
    } finally {
      setIsSearching(false)
    }
  }

  const selectUnsplashImage = (image: any) => {
    onInsert(image.urls.regular, image.alt_description || "Unsplash 이미지")
    resetAndClose()
  }

  const resetAndClose = () => {
    setImageUrl("")
    setImageAlt("")
    setFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    setUnsplashQuery("")
    setUnsplashImages([])
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>이미지 삽입</DialogTitle>
          <DialogDescription>이미지를 업로드하거나 URL을 입력하세요.</DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">업로드</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
            <TabsTrigger value="unsplash">Unsplash</TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 relative">
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center text-center pointer-events-none">
                <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">클릭하거나 파일을 끌어다 놓으세요</p>
                <p className="text-xs text-muted-foreground mt-1">10MB 이하의 이미지 파일</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image-alt-upload">대체 텍스트</Label>
              <Input
                id="image-alt-upload"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="이미지 설명 (접근성을 위해 권장)"
              />
            </div>

            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">미리보기:</p>
                <div className="border rounded-md overflow-hidden">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt={imageAlt || "미리보기"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="url" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">이미지 URL</Label>
              <Input
                id="image-url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image-alt-url">대체 텍스트</Label>
              <Input
                id="image-alt-url"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="이미지 설명 (접근성을 위해 권장)"
              />
            </div>
            {imageUrl && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">미리보기:</p>
                <div className="border rounded-md overflow-hidden">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={imageAlt || "미리보기"}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="unsplash" className="space-y-4 py-4">
            <div className="flex gap-2">
              <Input
                value={unsplashQuery}
                onChange={(e) => setUnsplashQuery(e.target.value)}
                placeholder="Unsplash 이미지 검색..."
                onKeyDown={(e) => e.key === "Enter" && searchUnsplash()}
              />
              <Button type="button" onClick={searchUnsplash} disabled={isSearching || !unsplashQuery}>
                {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "검색"}
              </Button>
            </div>
            {unsplashImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-2 mt-4">
                {unsplashImages.map((image) => (
                  <div
                    key={image.id}
                    className="border rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => selectUnsplashImage(image)}
                  >
                    <div className="relative w-full h-[100px]">
                      <Image
                        src={image.urls.small || "/placeholder.svg"}
                        alt={image.alt_description || "Unsplash 이미지"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-32 flex items-center justify-center text-muted-foreground text-sm">
                {isSearching ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  "검색어를 입력하여 Unsplash 이미지를 찾아보세요."
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={resetAndClose}>
            취소
          </Button>
          {activeTab === "upload" && (
            <Button onClick={handleUpload} disabled={!file || isUploading || isPending}>
              {isUploading || isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  업로드 중...
                </>
              ) : (
                "업로드"
              )}
            </Button>
          )}
          {activeTab === "url" && (
            <Button onClick={handleUrlInsert} disabled={!imageUrl}>
              삽입
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
