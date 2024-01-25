import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

const defaultContent = `
![React](https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png)

# hey!!, 
## Welcome to My Markdown Preview
### My React.js project for FreeCodeCamp


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My codePen](https://codepen.io/Aayush-Gupta-the-sans/)

> Block Quote

1. First list item
2. Second list item
`

marked.setOptions({
  sanitize: true, //Sanitizes incoming text.
  breaks: true, //for carriage return optional test 8
})

const renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>'
}

function App() {
  const [content, setContent] = useState(defaultContent)

  return (
    <>
      <div className="hero">
        <h1 className="title">Markdown Preview</h1>
        <h4>
          Made by Aayush Gupta <span>❤</span>{' '}
        </h4>
        <div className="container">
          <textarea
            value={content}
            onChange={(event) => {
              setContent(event.target.value)
            }}
            id="editor"
          />
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(content, { renderer: renderer }),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App
