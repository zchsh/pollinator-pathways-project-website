// Components
import { MarkdownContent } from "@/components/markdown-content";
// Styles
import s from "./project-entry.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { PageTitle } from "@/components/page-title";
import { ProjectQuery } from "../../../../tina/__generated__/types";
import { ImageGrid } from "@/components/image-grid";
import Spacer from "@/components/spacer";

export default function PageServer({ data }: { data: ProjectQuery }) {
  const { body, title, images } = data.project;

  const hasBodyAst =
    body !== null && Array.isArray(body.children) && body.children.length > 0;
  const bodyContentString = hasBodyAst ? StringFromTinaAst(body) : "";
  const hasBodyContent = bodyContentString.trim() !== "";

  return (
    <div className={s.root}>
      <Spacer h="2rem" />
      <PageTitle>{title}</PageTitle>
      <Spacer h="2rem" />

      {hasBodyContent ? (
        <>
          <div className={s.projectBody}>
            <MarkdownContent content={body} />
          </div>
          <Spacer h="2rem" />
        </>
      ) : null}

      {Array.isArray(images) ? (
        <div className={s.projectImages}>
          <ImageGrid images={images} />
        </div>
      ) : null}
      <Spacer h="8rem" />
    </div>
  );
}

function StringFromTinaAst(ast: TinaMarkdownContent): string {
  return ast.children
    .map((child) => {
      if ("text" in child) {
        return child.text;
      }
      if ("children" in child) {
        return StringFromTinaAst(child);
      }
      return "";
    })
    .join("");
}
