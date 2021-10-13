import React from 'react'

function Book(props){

  const {image , title , author ,children } = props
  const clickHandler=()=>{ alert('hello world !') };
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className="book" onMouseOver={()=>{console.log(author)}}>
      <img 
        src={image} 
        alt=""
      />
      <h3 onClick={()=> console.log(title)}>{title}</h3>
      <p> {author} </p>
      <p>{children}</p>
      <button type="button" onClick={ clickHandler }>ref example </button>
      <button type="button" onClick={() => complexExample(author) }>complexexample </button>

    </article>
  );
};


export default Book
