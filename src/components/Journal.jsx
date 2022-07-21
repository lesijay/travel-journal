import React from "react";
import Article from "./Article.jsx";
import "../App.css";
import { data } from "../data.js";

export default function Journal() {
    
  const travelJournal = data.map((item,id) => {
    return <Article key={id} {...item} />;
  });
  return (
    <div>
      <section className="section-center">{travelJournal}</section>
    </div>
  );
}
