"use client"

import { BubbleMenu, type BubbleMenuProps, type Editor } from "@tiptap/react"
import { Bold, Italic, Underline, Strikethrough, LinkIcon } from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import { LinkDialog } from "./link-dialog"

interface EditorBubbleMenuProps {
  editor: Editor
}

export function EditorBubbleMenu({ editor }: EditorBubbleMenuProps) {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false)

  const bubbleMenuProps: Partial<BubbleMenuProps> = {
    shouldShow: ({ editor, view, state, oldState, from, to }) => {
      // 텍스트가 선택되었을 때만 표시
      return from !== to
    },
    tippyOptions: {
      placement: "top",
    },
  }

  return (
    <>
      <BubbleMenu editor={editor} {...bubbleMenuProps} className="bg-background border rounded-md shadow-md flex p-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          aria-label="굵게"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          aria-label="기울임"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="밑줄"
        >
          <Underline className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          aria-label="취소선"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <Toggle
          size="sm"
          pressed={editor.isActive("link")}
          onPressedChange={() => {
            if (editor.isActive("link")) {
              editor.chain().focus().unsetLink().run()
            } else {
              setIsLinkDialogOpen(true)
            }
          }}
          aria-label="링크"
        >
          <LinkIcon className="h-4 w-4" />
        </Toggle>
      </BubbleMenu>

      <LinkDialog
        isOpen={isLinkDialogOpen}
        onClose={() => setIsLinkDialogOpen(false)}
        onInsert={(url) => {
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        initialUrl={editor.isActive("link") ? editor.getAttributes("link").href : ""}
        onUnlink={() => {
          editor.chain().focus().unsetLink().run()
        }}
        isLinkActive={editor.isActive("link")}
      />
    </>
  )
}
