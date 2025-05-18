import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// 임시 데이터
const publications = [
  {
    id: 1,
    name: "테크 인사이트",
    slug: "tech-insights",
    logo: "/placeholder.svg",
    description: "최신 기술 트렌드와 심층 분석을 제공하는 테크 전문 퍼블리케이션",
    followers: 25600,
    articles: 342,
  },
  {
    id: 2,
    name: "비즈니스 리더",
    slug: "business-leader",
    logo: "/placeholder.svg",
    description: "비즈니스 전략, 리더십, 경영 인사이트를 공유하는 비즈니스 전문 퍼블리케이션",
    followers: 18900,
    articles: 287,
  },
  {
    id: 3,
    name: "크리에이티브 랩",
    slug: "creative-lab",
    logo: "/placeholder.svg",
    description: "디자인, 창의성, 예술에 관한 이야기를 나누는 크리에이티브 퍼블리케이션",
    followers: 12300,
    articles: 215,
  },
]

export function FeaturedPublications() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {publications.map((publication) => (
        <Card key={publication.id}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-muted flex items-center justify-center">
                <img
                  src={publication.logo || "/placeholder.svg"}
                  alt={publication.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link href={`/publication/${publication.slug}`} className="font-bold text-lg mb-2">
                {publication.name}
              </Link>
              <p className="text-sm text-muted-foreground mb-4">{publication.description}</p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{publication.followers.toLocaleString()}명의 구독자</span>
                <span>•</span>
                <span>{publication.articles}개의 글</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button variant="outline" className="w-full">
              구독하기
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
