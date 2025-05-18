import { Button } from "@/components/ui/button"
import { TrendingArticles } from "@/components/trending-articles"
import { RecommendedTopics } from "@/components/recommended-topics"
import { RecommendedWriters } from "@/components/recommended-writers"
import { FeaturedPublications } from "@/components/featured-publications"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 히어로 섹션 */}
      <section className="py-12 md:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">생각을 공유하고 발견하세요</h1>
            <p className="text-muted-foreground md:text-xl">
              WriteShare에서 당신의 생각, 지식, 경험을 세상과 나누세요. 깊이 있는 콘텐츠를 작성하고 발견하는 공간입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/signup">시작하기</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">더 알아보기</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="WriteShare 플랫폼 소개 이미지"
              className="aspect-video object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* 트렌딩 아티클 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">트렌딩</h2>
        <TrendingArticles />
      </section>

      {/* 추천 토픽 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">추천 토픽</h2>
        <RecommendedTopics />
      </section>

      {/* 추천 작가 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">추천 작가</h2>
        <RecommendedWriters />
      </section>

      {/* 추천 퍼블리케이션 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">추천 퍼블리케이션</h2>
        <FeaturedPublications />
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">지금 바로 시작하세요</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          WriteShare에서 당신의 이야기를 세상과 나누고, 다양한 분야의 깊이 있는 콘텐츠를 발견하세요.
        </p>
        <Button asChild size="lg">
          <Link href="/signup">무료로 가입하기</Link>
        </Button>
      </section>
    </div>
  )
}
