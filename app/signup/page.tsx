import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
          <CardDescription>WriteShare에 가입하고 다양한 콘텐츠를 경험하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="홍길동" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="example@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">비밀번호 확인</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              <span>
                <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                  이용약관
                </Link>
                과{" "}
                <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                  개인정보처리방침
                </Link>
                에 동의합니다
              </span>
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">가입하기</Button>
          <div className="text-center text-sm text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
              로그인
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
