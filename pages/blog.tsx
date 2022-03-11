import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";

const Blog: NextPage = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </Container>
  );
};

export default Blog;
