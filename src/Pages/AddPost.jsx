import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    detail: "",
    author: "",
    published_at: "",
  });

  const navigate = useNavigate();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePublishedData = (e) => {
    const { name, value } = e.target;
    let newValue = new Date(value).toISOString().slice(0, 19).replace("T", " ");

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return navigate("/posts");
  };

  return (
    <section className="bg-sky-100">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              New Post
            </h2>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Blog title"
                required
                value={formData.title}
                onChange={handleFormData}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="detail"
                className="block text-gray-700 font-bold mb-2"
              >
                Detail
              </label>
              <textarea
                id="detail"
                name="detail"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Detail of the post"
                required
                value={formData.detail}
                onChange={handleFormData}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="author"
                className="block text-gray-700 font-bold mb-2"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="border rounded w-full py-2 px-3"
                required
                placeholder="Author name"
                value={formData.author}
                onChange={handleFormData}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="published_at"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="datetime-local"
                id="published_at"
                name="published_at"
                className="border rounded w-full py-2 px-3"
                required
                placeholder="Published date"
                value={formData.published_at}
                onChange={handlePublishedData}
              />
            </div>

            <div className="text-center">
              <button
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
