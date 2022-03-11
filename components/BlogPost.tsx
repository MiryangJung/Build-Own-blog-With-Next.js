import Link from "next/link";

const BlogPost = () => {
  return (
    <Link href="/blog" passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">2022.02.10</div>
        <div className={`font-extrabold text-2xl mt-2`}>
          💙 게시물 제목이 나타납니다.
        </div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          게시물 설명이 나타납니다.
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
