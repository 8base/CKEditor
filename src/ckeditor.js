/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from "@ckeditor/ckeditor5-editor-classic";
import { InlineEditor as InlineEditorBase } from "@ckeditor/ckeditor5-editor-inline";
import { DecoupledEditor as DecoupledEditorBase } from "@ckeditor/ckeditor5-editor-decoupled";
import { BalloonEditor as BallonEditorBase } from "@ckeditor/ckeditor5-editor-balloon";
import BalloonBlockEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import BlockToolbar from "@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import ShowBlocks from "@ckeditor/ckeditor5-show-blocks/src/showblocks.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";

class Classic extends ClassicEditorBase {}
class Inline extends InlineEditorBase {}
class Document extends DecoupledEditorBase {}
class Ballon extends BallonEditorBase {}
class BallonBlock extends BalloonBlockEditor {}

const plugin = [
  Alignment,
  Autoformat,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  Image,
  ImageStyle,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  ShowBlocks,
  Table,
  TableToolbar,
  TextTransformation,
];

// Plugins to include in the build.
Classic.builtinPlugins = plugin;
Inline.builtinPlugins = plugin;
Ballon.builtinPlugins = plugin;
Document.builtinPlugins = plugin;
BallonBlock.builtinPlugins = plugin;
// Editor configuration.

const config = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

Classic.defaultConfig = config;
Inline.defaultConfig = config;
Document.defaultConfig = config;
Ballon.defaultConfig = config;
BallonBlock.defaultConfig = {
  toolbar: {
    items: ["bold", "italic", "link"],
  },
  language: "en",
  blockToolbar: [
    "heading",
    "blockQuote",
    "indent",
    "outdent",
    "numberedList",
    "bulletedList",
    "insertTable",
  ],
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

export default { Classic, Inline, Document, BallonBlock, Ballon };
