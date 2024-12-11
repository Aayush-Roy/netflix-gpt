import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Body = () => {
  const showGpt  = useSelector(store=>store.gpt.showGptSearch)
  console.log(showGpt);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div className={showGpt ? "" :"bg-black"}>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;