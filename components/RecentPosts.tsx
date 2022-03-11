import Link from "next/link";

const RecentPosts = () => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        <Link href="/" passHref>
          <a className="mt-5">
            <div className={`font-medium text-xl`}>
              게시물 제목이 나타납니다.
            </div>
            <div className={`font-light`}>게시물 설명이 나타납니다.</div>
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="mt-5">
            <div className={`font-medium text-xl`}>Hello!</div>
            <div className={`font-light`}>안녕하세요.</div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
