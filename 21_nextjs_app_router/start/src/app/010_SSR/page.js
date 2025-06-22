import ArticleList from "@/components/articleList";
import ClientComp from "./components/ClientComp";
import "./lib";
import { ENDPOINT } from "@/constants";

export default async function SSR() {
  const articles = await fetch(ENDPOINT, { cache: "-store" }).then((res) =>
    res.json()
  );
  return (
    <>
      <div>SSR Page</div>
      <ClientComp />
      <ArticleList list={articles} basePath="010_SSR" />
    </>
  );
}
