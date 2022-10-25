import { useContext, useEffect } from "react";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import MenuBar from "../Menubar";
import Underline from "@tiptap/extension-underline";
import { Context } from "../../utils/store";

function TipTap() {
  const [state, dispatch] = useContext(Context);

  Highlight.configure({
    multicolor: true,
  });

  const editor = useEditor({
    extensions: [StarterKit, Highlight, TaskItem, TaskList, Underline],
    editorProps: {
      attributes: {
        class:
          "prose prose-lg prose-invert prose-text: sm:prose-lg lg:prose-lg xl:prose-2xl focus:outline-none bg-slate-800 rounded h-96 sm:96 m-2 pl-1 overflow-y-scroll text-left",
      },
    },
    autofocus: true,
    content: {
      type: "doc",
      content: state.notepadText,
    },
  });

  useEffect(() => {
    if (state.save) {
      const json = editor.getJSON();
      window.notepad.saveContent(JSON.stringify(json.content));
      dispatch({
        type: "SET_NOTEPADTEXT",
        payload: json.content,
      });
      dispatch({
        type: "TOGGLE_SAVE",
        payload: false,
      });
    }
  }, [state.save])

  if (!editor) {
    return null;
  }

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor}/>
    </div>
  );
}

export default TipTap;
