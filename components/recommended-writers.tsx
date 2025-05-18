import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 임시 데이터
const writers = [
  {
    id: 1,
    name: "김기술",
    username: "techkim",
    image: "/placeholder.svg",
    bio: "인공지능 연구원 | 기술 블로거 | 미래 기술에 대한 이야기를 공유합니다",
    followers: 12500,
  },
  {
    id: 2,
    name: "이재택",
    username: "remotework",
    image: "/placeholder.svg",
    bio: "원격 근무 전문가 | 생산성 코치 | 디지털 노마드 라이프스타일 실천 중",
    followers: 8700,
  },
  {
    id: 3,
    name: "박블록",
    username: "blockchainpark",
    image: "/placeholder.svg",
    bio: "블록체인 개발자 | 암호화폐 분석가 | 탈중앙화 기술의 미래를 연구합니다",
    followers: 6300,
  },
  {
    id: 4,
    name: "최디자인",
    username: "designchoi",
    image: "/placeholder.svg",
    bio: "UX/UI 디자이너 | 디자인 시스템 전문가 | 사용자 중심 디자인에 대한 글을 씁니다",
    followers: 5100,
  },
]

export function RecommendedWriters() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {writers.map((writer) => (
        <Card key={writer.id}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={writer.image || "/placeholder.svg"} alt={writer.name} />
                <AvatarFallback>{writer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Link href={`/@${writer.username}`} className="font-bold text-lg mb-1">
                {writer.name}
              </Link>
              <span className="text-muted-foreground text-sm mb-3">@{writer.username}</span>
              <p className="text-sm mb-4 line-clamp-2">{writer.bio}</p>
              <div className="text-sm text-muted-foreground mb-4">{writer.followers.toLocaleString()}명의 팔로워</div>
              <Button variant="outline" className="w-full">
                팔로우
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
