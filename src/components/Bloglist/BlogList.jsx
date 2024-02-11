import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import BlogPage from "../../pages/Blogs/BlogPage";

const Blog = ({ title, tag, authorImage, slug }) => {
  const blogAnimation = {
    hidden: { opacity: 0, x: -20, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <motion.div
      className="blog-container"
      initial="hidden"
      animate="visible"
      variants={blogAnimation}
    >
      <motion.div className="content-container">
        <NavLink
          to="/blogpage"
          state= {{ data: slug }}
          className="content__link"
        >
          <img src={authorImage} alt="author" className="author-image" />
          <h3>{tag}</h3>
          <h5>{title}</h5>
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

const blogs = [
  {
    title:
      "Transform Your Visual Narrative: Scaler Studios Leads in Expert Video Editing Solutions!",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the dynamic realm of virtual content, the visual narrative reigns preferred. As agencies and content creators strive for an aggressive facet, the demand for expert video modifying offerings has surged. Enter Scaler Studios, an enterprise chief that goes past conventional modifying, unleashing creativity in everybody.      ",
    tag: "Featured",
    slug: "blog-1",
  },
  {
    title:
      "Transform Your Visual Narrative: Scaler Studios Leads in Expert Video Editing Solutions!",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the dynamic realm of virtual content, the visual narrative reigns preferred. As agencies and content creators strive for an aggressive facet, the demand for expert video modifying offerings has surged. Enter Scaler Studios, an enterprise chief that goes past conventional modifying, unleashing creativity in everybody.      ",
    tag: "Featured",
    slug: "blog-2",
  },
  {
    title:
      "YouTube Brilliance: How to Hire the Best Video Editor Online for Your Channel's Success!    ",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the substantial and dynamic realm of YouTube, in which content material is king, the position of a professional video editor can not be overstated. Crafting visually engaging and professional videos is a key thing in building a hit YouTube channel.",
    tag: "Featured",
    slug: "blog-2",
  },
  {
    title:
      "YouTube Brilliance: How to Hire the Best Video Editor Online for Your Channel's Success!    ",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the substantial and dynamic realm of YouTube, in which content material is king, the position of a professional video editor can not be overstated. Crafting visually engaging and professional videos is a key thing in building a hit YouTube channel.",
    tag: "Featured",
    slug: "blog-2",
  },
  {
    title:
      "YouTube Brilliance: How to Hire the Best Video Editor Online for Your Channel's Success!    ",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the substantial and dynamic realm of YouTube, in which content material is king, the position of a professional video editor can not be overstated. Crafting visually engaging and professional videos is a key thing in building a hit YouTube channel.",
    tag: "Featured",
    slug: "blog-2",
  },
  {
    title:
      "YouTube Brilliance: How to Hire the Best Video Editor Online for Your Channel's Success!    ",
    author: "Admin",
    authorImage: "/image-1.jpg",
    postedOn: "10 days ago",
    content:
      "In the substantial and dynamic realm of YouTube, in which content material is king, the position of a professional video editor can not be overstated. Crafting visually engaging and professional videos is a key thing in building a hit YouTube channel.",
    tag: "Featured",
    slug: "blog-2",
  },
];
const BlogList = ({ tag }) => {
  return (
    <div className="blog-list-container">
      {blogs.map((blog, index) =>
        blog.tag === tag ? (
          <motion.div key={index}>
            <Blog {...blog} />
          </motion.div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default BlogList;
