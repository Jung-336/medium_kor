import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingArticles } from "@/components/trending-articles"
import { RecommendedTopics } from "@/components/recommended-topics"
import { RecommendedWriters } from "@/components/recommended-writers"
import { FeaturedPublications } from "@/components/featured-publications"

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">탐색하기</h1>

      <Tabs defaultValue="trending" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="trending">트렌딩</TabsTrigger>
          <TabsTrigger value="latest">최신</TabsTrigger>
          <TabsTrigger value="topics">토픽</TabsTrigger>
          <TabsTrigger value="writers">작가</TabsTrigger>
          <TabsTrigger value="publications">퍼블리케이션</TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <h2 className="text-2xl font-bold mb-6">트렌딩 아티클</h2>
          <TrendingArticles />
        </TabsContent>
        <TabsContent value="latest">
          <h2 className="text-2xl font-bold mb-6">최신 아티클</h2>
          <TrendingArticles />
        </TabsContent>
        <TabsContent value="topics">
          <h2 className="text-2xl font-bold mb-6">인기 토픽</h2>
          <RecommendedTopics />
        </TabsContent>
        <TabsContent value="writers">
          <h2 className="text-2xl font-bold mb-6">추천 작가</h2>
          <RecommendedWriters />
        </TabsContent>
        <TabsContent value="publications">
          <h2 className="text-2xl font-bold mb-6">추천 퍼블리케이션</h2>
          <FeaturedPublications />
        </TabsContent>
      </Tabs>
    </div>
  )
}
