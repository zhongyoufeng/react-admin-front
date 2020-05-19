import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({html, text}) {
    console.log('handleEditorChange', html, text)
}

export default function MarkDownBase() {
    return (
        <MdEditor
            style={{height:750}}
            value=""
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
        />
    )
}
