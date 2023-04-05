import { useEffect } from "react";

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const { posts } = await res.json();

    const paths = posts.map((curElem) => {
      return {
        params: { pageNo: curElem.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.pageNo;
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const myData = ({ data, setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  const { id, title, body } = data;
  return (
    <>
      <div className="container">
        <div key={id} className="cards_details">
          <h3 className="id_style">{id}</h3>
          <h1 className="effect_title">{title}</h1>
          <h3 className="para">{body}</h3>
        </div>
      </div>
    </>
  );
};

export default myData;
