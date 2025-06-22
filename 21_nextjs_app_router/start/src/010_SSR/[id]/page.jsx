import Article from "@/components/article";
import { ENDPOINT } from "@/constants";

export default async function SSR({ params }) {
  console.log(params);
  const article = await fetch(`${ENDPOINT}/${params.id}`, {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return (
    <>
      <div>SSR Page</div>
      <Article data={article} />
    </>
  );
}
