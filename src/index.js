import React from "react";
import ReactDom from "react-dom";

//CSS 
import './index.css'

import { data } from './books';
import Allbooks from "./Book";
import { greeting } from "./testing/testing";


function Booklist(){
  return (
    <section className="booklist">
      {data.map((book,index) => {
        return <Allbooks key={index} {...book} >
        </Allbooks>
      })}
      <p>{ greeting }</p>
    </section>
  );
};


ReactDom.render(<Booklist/>, document.getElementById('root'));
