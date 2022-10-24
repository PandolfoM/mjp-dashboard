import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/react";
import MenuBar from "../Menubar";

function TipTap() {
  Highlight.configure({
    multicolor: true,
  })

  const editor = new Editor({
    extensions: [
      StarterKit,
      Highlight,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none bg-slate-900 h-72 sm:96 m-2 p-2 min-w-screen',
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="prose-"/>
    </div>
  );
}

export default TipTap;
