import { ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function JobCard({ post }) {
  dayjs.extend(relativeTime);

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-2xl font-bold">{post.title}</div>
        </div>

        <div className="mb-5">{post.detail}</div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-3 text-sm">
            <div className="flex items-center text-gray-600 mb-1">
              <UserIcon className="size-5 mr-2" />
              {post.author}
            </div>

            <div className="flex items-center text-red-400">
              <ClockIcon className="size-5 mr-2" />
              {dayjs(post.published_at).fromNow()}
            </div>
          </div>
          <Link
            to={`/posts/${post.id}`}
            className="h-[36px] bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  }).isRequired,
};
