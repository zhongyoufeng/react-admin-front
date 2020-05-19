import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class EditorBase extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p></p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    };

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    };

    render () {

        const { editorState } = this.state;

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )

    }

}
