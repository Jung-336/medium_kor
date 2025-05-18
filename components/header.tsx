"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, Search, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 실제로는 인증 상태를 확인해야 함
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-foreground/80">
                  홈
                </Link>
                <Link href="/explore" className="text-lg font-medium transition-colors hover:text-foreground/80">
                  탐색하기
                </Link>
                <Link href="/topics" className="text-lg font-medium transition-colors hover:text-foreground/80">
                  토픽
                </Link>
                <Link href="/publications" className="text-lg font-medium transition-colors hover:text-foreground/80">
                  퍼블리케이션
                </Link>
                {isLoggedIn ? (
                  <>
                    <Link href="/new-story" className="text-lg font-medium transition-colors hover:text-foreground/80">
                      글쓰기
                    </Link>
                    <Link href="/me/stories" className="text-lg font-medium transition-colors hover:text-foreground/80">
                      내 글
                    </Link>
                    <Link href="/me/lists" className="text-lg font-medium transition-colors hover:text-foreground/80">
                      읽기 목록
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/signin" className="text-lg font-medium transition-colors hover:text-foreground/80">
                      로그인
                    </Link>
                    <Link href="/signup" className="text-lg font-medium transition-colors hover:text-foreground/80">
                      회원가입
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">WriteShare</span>
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            홈
          </Link>
          <Link
            href="/explore"
            className={`font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/explore" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            탐색하기
          </Link>
          <Link
            href="/topics"
            className={`font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/topics" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            토픽
          </Link>
          <Link
            href="/publications"
            className={`font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/publications" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            퍼블리케이션
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {showSearch ? (
            <div className="relative">
              <Input type="search" placeholder="검색..." className="w-[200px] md:w-[300px]" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">검색 닫기</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">검색</span>
            </Button>
          )}

          <ModeToggle />

          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">알림</span>
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="사용자 프로필" />
                      <AvatarFallback>사용자</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/me/profile">프로필</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-story">글쓰기</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/me/stories">내 글</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/me/lists">읽기 목록</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/me/stats">통계</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings">설정</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="text-red-500 focus:text-red-500">
                    로그아웃
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <Link href="/signin">로그인</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">시작하기</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
