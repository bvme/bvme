import {
  Header,
  Intro,
  Trending,
  Post,
  Load,
  Contact,
} from "../components/layout/index";
export default function Home() {
  return (
    <div className=" flex flex-col gap-[80px]">
      <Header />
      <Intro />
      <Trending />
      <Post />
      <Load />
      <Contact />
    </div>
  );
}
