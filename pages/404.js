import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])

  return (
    <div className="error">
      <div className="errorDetails">
        <div>
          <h1 className="title_head"> 404 Page Not Found </h1>
        </div>
        <div className="message">
          <p className="title"> Sorry, This page doesn't exist</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
