// Components
import { MarkdownContent } from "@/components/markdown-content";
import { BlogMetadata } from "../components/blog-metadata";
// Styles
import s from "./blog-entry.module.css";
// Types
import type { BlogQuery } from "../../../../tina/__generated__/types";
import { PageTitle } from "@/components/page-title";

export default function PageServer({ data }: { data: BlogQuery }) {
  const { author, body, coverImage, coverImageAlt, date, title } = data.blog;

  return (
    <>
      <div className={s.blogMetadataContainer}>
        <BlogMetadata metadata={{ author, date }} />
      </div>
      <div className={s.pageTitleContainer}>
        <PageTitle>{title}</PageTitle>
      </div>

      {typeof coverImage === "string" && coverImage !== "" ? (
        <div className={s.coverImageContainer}>
          <img
            className={s.coverImage}
            src={coverImage}
            alt={coverImageAlt || ""}
          />
        </div>
      ) : null}
      <div className={s.blogBody}>
        <MarkdownContent content={body} />
      </div>
    </>
  );
}
