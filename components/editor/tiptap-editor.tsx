"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Youtube from "@tiptap/extension-youtube"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { lowlight } from "lowlight"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import { EditorToolbar } from "./editor-toolbar"
import { EditorBubbleMenu } from "./editor-bubble-menu"
import { useEffect } from "react"

interface TiptapEditorProps {
  content: string
  onChange: (content: string) => void
  autofocus?: boolean
  placeholder?: string
}

export function TiptapEditor({
  content,
  onChange,
  autofocus = false,
  placeholder = "내용을 입력하세요...",
}: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      Image.configure({
        allowBase64: true,
        inline: false,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Youtube.configure({
        width: 640,
        height: 360,
        controls: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    autofocus,
    editorProps: {
      attributes: {
        class: "prose prose-lg dark:prose-invert max-w-none focus:outline-none min-h-[500px]",
      },
    },
  })

  useEffect(() => {
    // 에디터가 마운트된 후 내용이 변경되면 업데이트
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [editor, content])

  if (!editor) {
    return null
  }

  return (
    <div className="border rounded-md">
      <EditorToolbar editor={editor} />
      {editor && <EditorBubbleMenu editor={editor} />}
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
