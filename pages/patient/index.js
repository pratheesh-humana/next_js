import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const notifyError = () =>
    toast("You need to login to fetch patient's details!", {
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    if (localStorage.getItem("user_login") !== null) {
      setView(true);
    } else {
      router.push("/");
      setView(false);
      setTimeout(() => {
        notifyError();
      }, 500);
    }
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
      <ToastContainer />
    </>
  );
};

export default Posts;
