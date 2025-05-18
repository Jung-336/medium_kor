"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingArticles } from "@/components/trending-articles"

// 임시 사용자 데이터
const user = {
  name: "김기술",
  username: "techkim",
  image: "/placeholder.svg",
  bio: "인공지능 연구원 | 기술 블로거 | 미래 기술에 대한 이야기를 공유합니다",
  followers: 12500,
  following: 350,
  joinedAt: "2022년 3월",
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("stories")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* 프로필 헤더 */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <p className="text-muted-foreground mb-2">@{user.username}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">프로필 편집</Button>
                <Button>새 글 작성</Button>
              </div>
            </div>
            <p className="mb-4">{user.bio}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{user.followers.toLocaleString()}명의 팔로워</span>
              <span>•</span>
              <span>{user.following.toLocaleString()}명 팔로우 중</span>
              <span>•</span>
              <span>{user.joinedAt} 가입</span>
            </div>
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="stories">내 글</TabsTrigger>
            <TabsTrigger value="lists">읽기 목록</TabsTrigger>
            <TabsTrigger value="about">소개</TabsTrigger>
          </TabsList>
          <TabsContent value="stories">
            <h2 className="text-2xl font-bold mb-6">내가 작성한 글</h2>
            <TrendingArticles />
          </TabsContent>
          <TabsContent value="lists">
            <h2 className="text-2xl font-bold mb-6">읽기 목록</h2>
            <TrendingArticles />
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">소개</h2>
                <p className="mb-6">
                  안녕하세요, 저는 인공지능 연구원으로 일하고 있는 김기술입니다. 주로 자연어 처리와 컴퓨터 비전 분야에서
                  연구하고 있으며, 최신 기술 트렌드와 AI의 사회적 영향에 대한 글을 주로 작성합니다. 기술이 우리 삶을
                  어떻게 변화시키는지, 그리고 미래에는 어떤 모습이 될지에 대한 이야기를 나누고 싶습니다.
                </p>
                <h3 className="text-xl font-bold mb-2">경력</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>테크 인사이트 - 기술 칼럼니스트 (2022 - 현재)</li>
                  <li>AI 연구소 - 선임 연구원 (2020 - 현재)</li>
                  <li>글로벌 테크 기업 - AI 엔지니어 (2018 - 2020)</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">학력</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>서울대학교 - 컴퓨터공학 박사 (2018)</li>
                  <li>한국과학기술원 - 인공지능 석사 (2015)</li>
                  <li>연세대학교 - 컴퓨터과학 학사 (2013)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
