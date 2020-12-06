import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";

const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

const simpleNumberRender = (props) => (
  <div style={{ backgroundColor: "#ffd200" }}>{props.children}</div>
);

const subtitleStyle = (props) => (
  <div className="subtitle" style={{ fontSize: "24px", fontWeight: "800" }}>
    {props.children}
  </div>
);

const keyboardStyle = (props) => (
  <span
    className="keyboard-shortcut"
    style={{
      fontFamily: "monospace",
      backgroundColor: "#ccc",
      color: "black",
      padding: "2px 5px",
      display: "inline-block",
      border: "#ccc",
      borderRadius: "2px",
    }}
  >
    {props.children}
  </span>
);

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        {
          title: "Subtitle",
          value: "subtitle",
          blockEditor: { render: subtitleStyle },
        },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: () => "H",
              render: highlightRender,
            },
          },
          { title: "Code", value: "code" },
          {
            title: "Keyboard Shortcut",
            value: "keyboard",
            blockEditor: {
              icon: FaRegKeyboard,
              render: keyboardStyle,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: {
              icon: BiLink,
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            title: "External Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab?",
                name: "blank",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "fullWidthImage",
    },
    {
      type: "codepen",
    },
    {
      type: "youtube",
    },
    {
      type: "code",
    },
    {
      type: "tableOfContents",
    },
    {
      type: "timecode",
    },
    {
      type: "twoColumnText",
    },
    {
      type: "box",
    },
  ],
};
