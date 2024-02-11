/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import BlogList from "../../components/Bloglist/BlogList";
import "./Blogs.scss";
const Blogs = () => { 
  return (
    <div>
      <div className="blog__container">
        <div className="blog__section">
          <div className="blog__header">
            <h1>Blog</h1>
          </div>
          <div className="blog__section blog__latest">
          <BlogList tag={"Featured"} />
        </div>
        </div>
        
      </div>
      <div className="fade__top"></div>
    </div>
  );
};

export default Blogs;
