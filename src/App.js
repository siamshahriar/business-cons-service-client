import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useEffect, useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
};

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="">
      {loader ? (
        <div className="flex min-h-screen justify-center items-center">
          <HashLoader
            loading={loader}
            cssOverride={override}
            size={150}
            color="#36d7b7"
          />
        </div>
      ) : (
        <div>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster></Toaster>
        </div>
      )}
    </div>
  );
}

export default App;
