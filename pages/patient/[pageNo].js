import Header from "@/components/Header";

export const getStaticPaths = async () => {
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
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Header />
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
