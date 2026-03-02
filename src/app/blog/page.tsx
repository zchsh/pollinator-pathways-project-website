// Components
import LayoutRoot from "@/components/layout-root";
import BlogCategoryView from "./components/blog-category-view";
// ...
import getSitewideData from "@/lib/get-sitewide-data";

export default async function Blog() {
  const { footer, nav } = await getSitewideData();
  return (
    <LayoutRoot footer={footer} pathname="/blog" navBarItems={nav.items}>
      <BlogCategoryView category="all" />
    </LayoutRoot>
  );
}

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export const metadata = {
  title: "Blog" + METADATA_TITLE_SUFFIX,
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};
