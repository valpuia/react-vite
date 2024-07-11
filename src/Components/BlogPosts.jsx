import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import JobCard from "./JobCard";

export default function BlogPost({ isHome = false }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const limit = isHome ? 6 : "*";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/posts?_limit=${limit}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log("Error while fetching: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [limit]);

  return (
    <section className="bg-blue-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-xl xl:text-4xl font-bold text-sky-500 mb-6 text-center">
          {isHome ? "Latest Posts" : "All Posts"}
        </h2>

        {loading ? (
          <Loader loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <JobCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {isHome && (
          <div className="text-center mt-10">
            <Link
              to="posts"
              className="bg-gray-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >
              View All Jobs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

BlogPost.propTypes = {
  isHome: PropTypes.bool,
};
