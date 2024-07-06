import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import Posts from "./Pages/Posts";
import NotFound from "./Pages/NotFound";
import PostDetail, { JobLoader } from "./Pages/PostDetail";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";

function App() {
  const deletePost = async (id) => {
    return await fetch(`/api/posts/${id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/new-post" element={<AddPost />} />
        <Route
          path="/edit-post/:id"
          loader={JobLoader}
          element={<EditPost />}
          errorElement={<NotFound />}
        />
        <Route
          path="/posts/:id"
          loader={JobLoader}
          element={<PostDetail deletePost={deletePost} />}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
