import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/posts/${params.id}`);
  const data = await res.json();
  return data;
};

const PostDetail = ({ deletePost }) => {
  const post = useLoaderData();
  dayjs.extend(relativeTime);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure to delete?")) {
      return;
    }

    deletePost(id);

    return navigate("/posts");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/posts"
            className="text-sky-500 hover:text-sky-600 flex items-center"
          >
            <ArrowLeftIcon className="size-5 mr-1" />
            Back to listing
          </Link>
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold mb-6">{post.title}</h3>
                <span className="flex gap-x-2">
                  <Link to={`/edit-post/${post.id}`}>
                    <PencilSquareIcon className="size-5 text-sky-500" />
                  </Link>

                  <button onClick={() => handleDelete(post.id)}>
                    <TrashIcon className="size-5 text-red-500" />
                  </button>
                </span>
              </div>

              <p className="mb-4">{post.detail}</p>

              <div className="flex items-center">
                Posted on{" "}
                <span className="mx-1 text-sm text-red-400">
                  {dayjs(post.published_at).fromNow()}
                </span>{" "}
                by
                <span className="mx-1 font-semibold">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { PostDetail as default, JobLoader };
