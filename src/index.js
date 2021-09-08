import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';

const loadPreview=`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:



  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.n
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.` 


class App extends React.Component{
  state={
    text:loadPreview
  }

  handleChange=(e)=>{
    this.setState({
      text : e.target.value
    })
  }

  render(){
    const { text }=this.state;
    const markdown = marked(text,{breaks:true});


    return(
      
      <div className="mark-previewer  justify-content-center">
        <h1 className="text-center fw-bolder text">Markdown previewer</h1>
        <div className="m-block d-md-flex d-inblock justify-content-center align-items-center">
          <div className="editor m-4" style={{background:"#79B4B7"}}>
            <textarea className="textarea " style={{width:"100%", height:"100%"}} value={text} onChange={this.handleChange} />
          </div>
          <div className="previewer m-4 p-2" style={{background:"#79B4B7"}} dangerouslySetInnerHTML={{__html:markdown}}></div>
        </div>
        
      </div>
    )
  }
}












ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
