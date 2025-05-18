"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// 임시 데이터
const viewsData = [
  { name: "1월", views: 4000 },
  { name: "2월", views: 3000 },
  { name: "3월", views: 5000 },
  { name: "4월", views: 7000 },
  { name: "5월", views: 6000 },
  { name: "6월", views: 8000 },
]

const articlesData = [
  { title: "인공지능이 바꾸는 미래 일자리의 모습", views: 12500, reads: 8750, claps: 1240 },
  { title: "블록체인 기술의 실제 활용 사례와 미래 전망", views: 8700, reads: 6090, claps: 723 },
  { title: "효과적인 원격 근무를 위한 5가지 팁", views: 7200, reads: 5040, claps: 856 },
  { title: "데이터 과학자가 되기 위한 로드맵", views: 6500, reads: 4550, claps: 612 },
  { title: "클라우드 컴퓨팅의 현재와 미래", views: 5800, reads: 4060, claps: 534 },
]

const referrerData = [
  { name: "소셜 미디어", value: 45 },
  { name: "검색 엔진", value: 30 },
  { name: "직접 접속", value: 15 },
  { name: "이메일", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">통계</h1>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="articles">글 별 통계</TabsTrigger>
            <TabsTrigger value="audience">독자 분석</TabsTrigger>
            <TabsTrigger value="earnings">수익</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">총 조회수</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42,530</div>
                  <p className="text-xs text-muted-foreground">+20.1% 지난 달 대비</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">총 읽기 완료</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">29,771</div>
                  <p className="text-xs text-muted-foreground">+15.3% 지난 달 대비</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">총 박수</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4,281</div>
                  <p className="text-xs text-muted-foreground">+12.5% 지난 달 대비</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">새 팔로워</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1,324</div>
                  <p className="text-xs text-muted-foreground">+18.2% 지난 달 대비</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>월별 조회수 추이</CardTitle>
                <CardDescription>지난 6개월 동안의 조회수 추이</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={viewsData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>인기 글</CardTitle>
                  <CardDescription>가장 많이 읽힌 글</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={articlesData.slice(0, 3)}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="title" type="category" width={150} />
                        <Tooltip />
                        <Bar dataKey="views" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>유입 경로</CardTitle>
                  <CardDescription>독자들이 어디서 왔는지</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={referrerData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {referrerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>글 별 통계</CardTitle>
                <CardDescription>각 글의 성과를 확인하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">제목</th>
                        <th className="text-right py-3 px-4">조회수</th>
                        <th className="text-right py-3 px-4">읽기 완료</th>
                        <th className="text-right py-3 px-4">읽기 완료율</th>
                        <th className="text-right py-3 px-4">박수</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articlesData.map((article, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{article.title}</td>
                          <td className="text-right py-3 px-4">{article.views.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{article.reads.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{Math.round((article.reads / article.views) * 100)}%</td>
                          <td className="text-right py-3 px-4">{article.claps.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>독자 위치</CardTitle>
                  <CardDescription>독자들의 지역 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>대한민국</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>미국</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "15%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>일본</span>
                      <span>8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "8%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>중국</span>
                      <span>5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "5%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>기타</span>
                      <span>7%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "7%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>독자 연령대</CardTitle>
                  <CardDescription>독자들의 연령 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>18-24세</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "12%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>25-34세</span>
                      <span>38%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "38%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>35-44세</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "28%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>45-54세</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "15%" }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span>55세 이상</span>
                      <span>7%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "7%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings">
            <Card>
              <CardHeader>
                <CardTitle>파트너 프로그램 수익</CardTitle>
                <CardDescription>아직 파트너 프로그램에 가입하지 않았습니다.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-center mb-6">파트너 프로그램에 가입하고 글 작성으로 수익을 창출하세요.</p>
                <Button>파트너 프로그램 가입하기</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
