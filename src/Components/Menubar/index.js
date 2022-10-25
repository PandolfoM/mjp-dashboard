import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import {
  faBold,
  faCode,
  faDiagramNext,
  faHeading,
  faHighlighter,
  faItalic,
  faListCheck,
  faListOl,
  faListUl,
  faParagraph,
  faQuoteLeft,
  faRotateLeft,
  faRotateRight,
  faStrikethrough,
  faTerminal,
  faTextSlash,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Menuitem from "../Menuitem";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const items = [
    {
      icon: faBold,
      title: "Bold ctrl+b",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: faItalic,
      title: "Italic ctrl+i",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: faStrikethrough,
      title: "Strike ctrl+shift+x",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: faUnderline,
      title: "Underline ctrl+u",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: faCode,
      title: "Code ctrl+e",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("underline"),
    },
    {
      icon: faHighlighter,
      title: "Highlight ctrl+shift+h",
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive("highlight"),
    },
    {
      type: "divider",
    },
    {
      icon: faHeading,
      title: "Heading 1 ctrl+alt+1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: faHeading,
      title: "Heading 2 ctrl+alt+2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: faHeading,
      title: "Heading 3 ctrl+alt+3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      icon: faParagraph,
      title: "Paragraph ctrl+alt+0",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: faListUl,
      title: "Bullet List ctrl+shift+8",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: faListOl,
      title: "Ordered List ctrl+shift+7",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: faListCheck,
      title: "Task List ctrl+shift+9",
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive("taskList"),
    },
    {
      icon: faTerminal,
      title: "Code Block ctrl+alt+c",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      type: "divider",
    },
    {
      icon: faQuoteLeft,
      title: "Blockquote ctrl+shift+b",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      icon: faWindowMinimize,
      title: "Horizontal Rule",
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: "divider",
    },
    {
      icon: faDiagramNext,
      title: "Hard Break shift+enter",
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: faTextSlash,
      title: "Clear Format",
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      type: "divider",
    },
    {
      icon: faRotateLeft,
      title: "Undo ctrl+z",
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: faRotateRight,
      title: "Redo ctrl+shift+z",
      action: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <div className="items-center border-b-2 border-solid border-white flex p-1 flex-wrap">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === "divider" ? (
            <div className="bg-white h-5 ml-2 mr-3 w-0.5" />
          ) : (
            <Menuitem {...item} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default MenuBar;
