import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// 임시 데이터
const article = {
  id: 1,
  title: "인공지능이 바꾸는 미래 일자리의 모습",
  content: `
    <p>인공지능(AI) 기술의 급속한 발전은 우리 사회의 다양한 측면에 영향을 미치고 있습니다. 특히 일자리와 직업 세계에 미치는 영향은 매우 크며, 이는 앞으로 더욱 가속화될 전망입니다. 이 글에서는 AI가 미래 일자리에 어떤 변화를 가져올지, 그리고 우리는 어떻게 준비해야 할지에 대해 살펴보겠습니다.</p>
    
    <h2>자동화와 일자리 대체</h2>
    
    <p>AI와 로봇 기술의 발전으로 반복적이고 예측 가능한 작업들은 점차 자동화되고 있습니다. 제조업, 물류, 고객 서비스 등의 분야에서 이미 많은 일자리가 자동화되었으며, 이러한 추세는 계속될 것으로 예상됩니다.</p>
    
    <p>맥킨지 글로벌 연구소의 보고서에 따르면, 2030년까지 전 세계적으로 약 8억 개의 일자리가 자동화로 인해 대체될 수 있다고 합니다. 하지만 이는 모든 일자리가 사라진다는 의미는 아닙니다. 오히려 새로운 형태의 일자리가 창출되고, 기존 직업의 성격이 변화할 것입니다.</p>
    
    <h2>새롭게 등장하는 직업들</h2>
    
    <p>AI 시대에는 새로운 기술과 관련된 다양한 직업들이 등장할 것입니다. 예를 들어:</p>
    
    <ul>
      <li>AI 윤리 전문가: AI 시스템의 윤리적 사용과 개발을 감독</li>
      <li>데이터 과학자: 대량의 데이터를 분석하여 인사이트 도출</li>
      <li>로봇 코디네이터: 인간과 로봇의 협업을 관리</li>
      <li>디지털 콘텐츠 크리에이터: AI 도구를 활용한 창의적 콘텐츠 제작</li>
      <li>가상현실 경험 디자이너: 몰입형 디지털 경험 설계</li>
    </ul>
    
    <p>이러한 직업들은 AI와 함께 일하거나, AI가 잘하지 못하는 영역에서 인간의 강점을 활용하는 역할을 하게 될 것입니다.</p>
    
    <h2>직업의 변화, 아닌 소멸</h2>
    
    <p>많은 전문가들은 AI가 직업을 완전히 대체하기보다는 직업의 성격을 변화시킬 것이라고 예측합니다. 예를 들어, 의사는 AI 진단 도구를 활용하여 더 정확한 진단을 내릴 수 있고, 교사는 AI 학습 플랫폼을 통해 개인화된 교육을 제공할 수 있습니다.</p>
    
    <p>이는 직업의 소멸이 아닌, 직무의 재정의를 의미합니다. 반복적이고 시간 소모적인 작업은 AI에게 맡기고, 인간은 더 창의적이고 복잡한 문제 해결, 대인 관계, 윤리적 판단 등에 집중할 수 있게 될 것입니다.</p>
    
    <h2>미래를 위한 준비</h2>
    
    <p>AI 시대에 적응하기 위해서는 다음과 같은 준비가 필요합니다:</p>
    
    <ol>
      <li><strong>평생 학습 마인드셋 갖기:</strong> 기술의 변화 속도가 빨라지면서, 지속적인 학습과 재교육이 필수적입니다.</li>
      <li><strong>소프트 스킬 개발:</strong> 창의성, 비판적 사고, 감성 지능, 협업 능력 등 AI가 쉽게 대체할 수 없는 인간 고유의 능력을 키우는 것이 중요합니다.</li>
      <li><strong>디지털 리터러시 향상:</strong> 기본적인 프로그래밍, 데이터 분석, AI 도구 활용 능력은 거의 모든 직종에서 요구될 것입니다.</li>
      <li><strong>적응력과 유연성 기르기:</strong> 빠르게 변화하는 환경에서 적응하고 새로운 기회를 포착하는 능력이 중요합니다.</li>
    </ol>
    
    <h2>결론</h2>
    
    <p>AI는 분명 일자리 시장에 큰 변화를 가져올 것입니다. 하지만 이는 두려움의 대상이 아닌, 새로운 가능성의 시대로 볼 수 있습니다. 인간과 AI가 각자의 강점을 살려 협력한다면, 더 효율적이고 창의적인 일의 방식이 등장할 것입니다.</p>
    
    <p>중요한 것은 이러한 변화에 수동적으로 대응하는 것이 아니라, 적극적으로 준비하고 적응하는 자세입니다. 미래의 일자리는 AI와 함께 일하는 방법을 아는 사람들, 그리고 인간만이 가진 고유한 능력을 발휘할 수 있는 사람들에게 더 많은 기회가 열릴 것입니다.</p>
  `,
  publishedAt: "2023년 5월 15일",
  readTime: "8분",
  author: {
    name: "김기술",
    username: "techkim",
    image: "/placeholder.svg",
    bio: "인공지능 연구원 | 기술 블로거 | 미래 기술에 대한 이야기를 공유합니다",
    followers: 12500,
  },
  topics: ["기술", "인공지능", "미래", "일자리", "자기계발"],
  claps: 1240,
  comments: [
    {
      id: 1,
      author: {
        name: "이재택",
        username: "remotework",
        image: "/placeholder.svg",
      },
      content: "정말 통찰력 있는 글입니다. AI 시대에 적응하기 위한 준비 방법이 특히 도움이 되었습니다.",
      publishedAt: "2023년 5월 16일",
      likes: 24,
    },
    {
      id: 2,
      author: {
        name: "박블록",
        username: "blockchainpark",
        image: "/placeholder.svg",
      },
      content:
        "AI와 블록체인 기술이 결합되면 더 흥미로운 일자리 변화가 있을 것 같습니다. 이에 대한 후속 글도 기대해 봅니다!",
      publishedAt: "2023년 5월 17일",
      likes: 18,
    },
  ],
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        {/* 글 헤더 */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage src={article.author.image || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <Link href={`/@${article.author.username}`} className="font-medium">
                  {article.author.name}
                </Link>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  팔로우
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span>{article.readTime} 읽기</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {article.topics.map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </header>

        {/* 글 본문 */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* 글 하단 */}
        <footer className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M11 13H6a3 3 0 0 1-2.83-2c-.1-.5-.06-1 .1-1.5.16-.5.47-.93.9-1.25L10 4.5c.24-.2.5-.32.77-.4.6-.2 1.23-.1 1.73.3.5.4.7 1.03.6 1.63-.1.6-.5 1.13-1.1 1.47l-1.7.8" />
                  <path d="M11 19H6a3 3 0 0 1-2.83-2c-.1-.5-.06-1 .1-1.5.16-.5.47-.93.9-1.25L10 10.5c.24-.2.5-.32.77-.4.6-.2 1.23-.1 1.73.3.5.4.7 1.03.6 1.63-.1.6-.5 1.13-1.1 1.47l-1.7.8" />
                </svg>
                <span>{article.claps}</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M17.5 6.5 12 2 6.5 6.5" />
                  <path d="M6.5 17.5 12 22l5.5-4.5" />
                  <path d="M12 2v20" />
                </svg>
                <span>공유</span>
              </Button>
            </div>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span className="sr-only">북마크</span>
            </Button>
          </div>

          <Separator className="mb-6" />

          {/* 작가 정보 */}
          <div className="flex items-start gap-4 p-6 border rounded-lg mb-8">
            <Avatar className="h-16 w-16">
              <AvatarImage src={article.author.image || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <Link href={`/@${article.author.username}`} className="font-bold text-lg">
                  {article.author.name}
                </Link>
                <Button>팔로우</Button>
              </div>
              <p className="text-muted-foreground mb-2">{article.author.bio}</p>
              <p className="text-sm text-muted-foreground">{article.author.followers.toLocaleString()}명의 팔로워</p>
            </div>
          </div>
        </footer>

        {/* 댓글 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">댓글</h2>

          {/* 댓글 작성 */}
          <div className="mb-8">
            <Textarea placeholder="댓글을 작성하세요..." className="mb-4" rows={3} />
            <div className="flex justify-end">
              <Button>댓글 작성</Button>
            </div>
          </div>

          {/* 댓글 목록 */}
          <div className="space-y-6">
            {article.comments.map((comment) => (
              <div key={comment.id} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={comment.author.image || "/placeholder.svg"} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={`/@${comment.author.username}`} className="font-medium">
                        {comment.author.name}
                      </Link>
                      <span className="text-sm text-muted-foreground">{comment.publishedAt}</span>
                    </div>
                    <p className="mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-1"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        좋아요 {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        답글
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
