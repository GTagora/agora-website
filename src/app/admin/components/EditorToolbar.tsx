"use client";

import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Type,
} from "lucide-react";
import { type RefObject } from "react";

interface EditorToolbarProps {
  textareaRef: RefObject<HTMLTextAreaElement>;
  onUpdate: (newValue: string) => void;
  value: string;
}

export default function EditorToolbar({
  textareaRef,
  onUpdate,
  value,
}: EditorToolbarProps) {
  const insertFormat = (
    prefix: string,
    suffix: string = "",
    block: boolean = false,
  ) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    let replacement = "";
    if (block) {
      // For block elements, we might want newlines if not already there
      replacement = `\n${prefix}${selectedText}${suffix}\n`;
    } else {
      replacement = `${prefix}${selectedText}${suffix}`;
    }

    const newValue =
      value.substring(0, start) + replacement + value.substring(end);

    onUpdate(newValue);

    // Restore focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length + (block ? 1 : 0), // Adjust for newline if block
      );
    }, 0);
  };

  const handleColor = (color: string) => {
    insertFormat(`<span style="color: ${color}">`, "</span>");
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 rounded-t-xl sticky top-0 z-10 text-black">
      <button
        type="button"
        onClick={() => insertFormat("**", "**")}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Bold"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => insertFormat("*", "*")}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Italic"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => insertFormat("~~", "~~")}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Strikethrough"
      >
        <Strikethrough className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      <button
        type="button"
        onClick={() => insertFormat("- ", "", true)}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Bullet List"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => insertFormat("1. ", "", true)}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => insertFormat("> ", "", true)}
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Block Quote"
      >
        <Quote className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      <button
        type="button"
        onClick={() =>
          insertFormat('<div style="text-align: left">', "</div>", true)
        }
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Align Left"
      >
        <AlignLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() =>
          insertFormat('<div style="text-align: center">', "</div>", true)
        }
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Align Center"
      >
        <AlignCenter className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() =>
          insertFormat('<div style="text-align: right">', "</div>", true)
        }
        className="p-1.5 hover:bg-gray-200 rounded text-gray-700"
        title="Align Right"
      >
        <AlignRight className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      <div className="flex items-center gap-1 border border-gray-300 rounded px-1 bg-white">
        <Type className="w-4 h-4 text-gray-500" />
        <input
          type="color"
          className="w-6 h-6 p-0 border-0 bg-transparent cursor-pointer"
          onChange={(e) => handleColor(e.target.value)}
          title="Text Color"
        />
      </div>
    </div>
  );
}
