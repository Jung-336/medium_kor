import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// 임시 데이터
const trendingArticles = [
  {
    id: 1,
    title: "인공지능이 바꾸는 미래 일자리의 모습",
    excerpt: "인공지능 기술의 발전으로 인해 변화하는 직업 세계와 미래 일자리 전망에 대한 심층 분석",
    author: {
      name: "김기술",
      image: "/placeholder.svg",
      username: "techkim",
    },
    publishedAt: "2023-05-15",
    readTime: "8분",
    topics: ["기술", "인공지능", "미래"],
    claps: 1240,
    comments: 32,
  },
  {
    id: 2,
    title: "효과적인 원격 근무를 위한 5가지 팁",
    excerpt: "팬데믹 이후 일상화된 원격 근무 환경에서 생산성을 높이고 워라밸을 유지하는 방법",
    author: {
      name: "이재택",
      image: "/placeholder.svg",
      username: "remotework",
    },
    publishedAt: "2023-05-12",
    readTime: "5분",
    topics: ["일과 삶", "생산성", "원격근무"],
    claps: 856,
    comments: 18,
  },
  {
    id: 3,
    title: "블록체인 기술의 실제 활용 사례와 미래 전망",
    excerpt: "암호화폐를 넘어 다양한 산업에서 활용되고 있는 블록체인 기술의 현재와 미래",
    author: {
      name: "박블록",
      image: "/placeholder.svg",
      username: "blockchainpark",
    },
    publishedAt: "2023-05-10",
    readTime: "10분",
    topics: ["블록체인", "기술", "미래"],
    claps: 723,
    comments: 15,
  },
]

export function TrendingArticles() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {trendingArticles.map((article) => (
        <Card key={article.id} className="overflow-hidden">
          <CardContent className="p-0">
            <Link href={`/article/${article.id}`} className="block p-6">
              <div className="flex items-center gap-2 mb-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={article.author.image || "/placeholder.svg"} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{article.author.name}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </Link>
          </CardContent>
          <CardFooter className="p-4 pt-0 border-t flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime} 읽기</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M11 13H6a3 3 0 0 1-2.83-2c-.1-.5-.06-1 .1-1.5.16-.5.47-.93.9-1.25L10 4.5c.24-.2.5-.32.77-.4.6-.2 1.23-.1 1.73.3.5.4.7 1.03.6 1.63-.1.6-.5 1.13-1.1 1.47l-1.7.8" />
                  <path d="M11 19H6a3 3 0 0 1-2.83-2c-.1-.5-.06-1 .1-1.5.16-.5.47-.93.9-1.25L10 10.5c.24-.2.5-.32.77-.4.6-.2 1.23-.1 1.73.3.5.4.7 1.03.6 1.63-.1.6-.5 1.13-1.1 1.47l-1.7.8" />
                </svg>
                {article.claps}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {article.comments}
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
