// Components
import { PageTitle } from "@/components/page-title";
import { BlogEntriesList } from "../blog-entries-list";
import Spacer from "@/components/spacer";

export default function BlogCategoryView({
  category,
  allBlogEntries,
}: {
  category: string;
  allBlogEntries: $TSFixMe;
}) {
  return (
    <main>
      <Spacer h="2rem" />
      <PageTitle>Blog</PageTitle>
      <Spacer h="1rem" />
      <BlogEntriesList allBlogEntries={allBlogEntries} category={category} />
    </main>
  );
}
