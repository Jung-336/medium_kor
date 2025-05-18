import Link from "next/link"
import { Button } from "@/components/ui/button"

// 임시 데이터
const topics = [
  { id: 1, name: "기술", count: 1245 },
  { id: 2, name: "비즈니스", count: 987 },
  { id: 3, name: "생산성", count: 756 },
  { id: 4, name: "인공지능", count: 654 },
  { id: 5, name: "디자인", count: 543 },
  { id: 6, name: "마케팅", count: 432 },
  { id: 7, name: "자기계발", count: 321 },
  { id: 8, name: "건강", count: 210 },
]

export function RecommendedTopics() {
  return (
    <div className="flex flex-wrap gap-3">
      {topics.map((topic) => (
        <Button key={topic.id} variant="outline" asChild>
          <Link href={`/topic/${topic.id}`}>
            {topic.name} <span className="ml-2 text-muted-foreground">{topic.count}</span>
          </Link>
        </Button>
      ))}
      <Button variant="ghost" asChild>
        <Link href="/topics">더 보기</Link>
      </Button>
    </div>
  )
}
