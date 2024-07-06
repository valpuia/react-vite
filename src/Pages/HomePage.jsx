import BlogPost from "../Components/BlogPosts";
import HomeHero from "../Components/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BlogPost isHome={true} />
    </>
  );
}
