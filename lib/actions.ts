"use server"

import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      return { error: "파일이 제공되지 않았습니다." }
    }

    // 파일 타입 검증
    if (!file.type.startsWith("image/")) {
      return { error: "이미지 파일만 업로드할 수 있습니다." }
    }

    // 파일 크기 제한 (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return { error: "파일 크기는 10MB를 초과할 수 없습니다." }
    }

    // 파일 이름에 고유 ID 추가
    const fileExtension = file.name.split(".").pop() || ""
    const fileName = `${nanoid()}.${fileExtension}`
    const contentType = file.type

    const blob = await put(`images/${fileName}`, file, {
      contentType,
      access: "public",
    })

    return {
      success: true,
      url: blob.url,
      fileName: blob.pathname.split("/").pop(),
    }
  } catch (error) {
    console.error("이미지 업로드 중 오류 발생:", error)
    return { error: "이미지 업로드 중 오류가 발생했습니다." }
  }
}
