import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts, setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>Blog</title>
        </Head>
        {posts?.slice(0, 20).map((currElem) => {
          const { id, title } = currElem;
          return (
            <div key={id} className="cards">
              <h3>{id}</h3>
              <Link href={`/patient/${id}`}>
                <h2 className="title_link">{title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
