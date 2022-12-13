import {marked} from 'marked';
import React, { useState, useEffect } from 'react';


const MarkdownViewer = (props) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(props.markdownUrl)
      .then(response => response.text())
      .then(text => setMarkdown(marked(text)));
  }, [props.markdownUrl]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default MarkdownViewer;