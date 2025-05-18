import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "검색어가 제공되지 않았습니다." }, { status: 400 })
  }

  try {
    // 실제 구현에서는 Unsplash API를 호출해야 합니다.
    // 현재는 샘플 데이터를 반환합니다.
    const mockResults = [
      {
        id: "1",
        urls: {
          raw: "/placeholder.svg?height=1000&width=1500",
          full: "/placeholder.svg?height=800&width=1200",
          regular: "/placeholder.svg?height=600&width=800",
          small: "/placeholder.svg?height=400&width=600",
          thumb: "/placeholder.svg?height=200&width=300",
        },
        alt_description: `Unsplash 이미지: ${query} 1`,
        user: {
          name: "샘플 사용자 1",
        },
      },
      {
        id: "2",
        urls: {
          raw: "/placeholder.svg?height=1000&width=1500",
          full: "/placeholder.svg?height=800&width=1200",
          regular: "/placeholder.svg?height=600&width=800",
          small: "/placeholder.svg?height=400&width=600",
          thumb: "/placeholder.svg?height=200&width=300",
        },
        alt_description: `Unsplash 이미지: ${query} 2`,
        user: {
          name: "샘플 사용자 2",
        },
      },
      {
        id: "3",
        urls: {
          raw: "/placeholder.svg?height=1000&width=1500",
          full: "/placeholder.svg?height=800&width=1200",
          regular: "/placeholder.svg?height=600&width=800",
          small: "/placeholder.svg?height=400&width=600",
          thumb: "/placeholder.svg?height=200&width=300",
        },
        alt_description: `Unsplash 이미지: ${query} 3`,
        user: {
          name: "샘플 사용자 3",
        },
      },
      {
        id: "4",
        urls: {
          raw: "/placeholder.svg?height=1000&width=1500",
          full: "/placeholder.svg?height=800&width=1200",
          regular: "/placeholder.svg?height=600&width=800",
          small: "/placeholder.svg?height=400&width=600",
          thumb: "/placeholder.svg?height=200&width=300",
        },
        alt_description: `Unsplash 이미지: ${query} 4`,
        user: {
          name: "샘플 사용자 4",
        },
      },
    ]

    return NextResponse.json({
      results: mockResults,
      total: mockResults.length,
      total_pages: 1,
    })
  } catch (error) {
    console.error("Unsplash 검색 중 오류 발생:", error)
    return NextResponse.json({ error: "Unsplash 이미지 검색 중 오류가 발생했습니다." }, { status: 500 })
  }
}
