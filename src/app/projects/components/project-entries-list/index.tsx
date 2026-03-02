// Third-party
import clsx from "clsx";
// Utils

import Link from "next/link";
// Styles
import s from "./style.module.css";

export async function ProjectEntriesList({
  projectEntries,
}: {
  projectEntries: $TSFixMe;
}) {
  return (
    <>
      {/* Note: removed category display for now, not needed yet */}
      {/*<BlogCategoryLinks blogCategories={blogCategories} />*/}
      {projectEntries.length > 0 ? (
        <ul className={s.projectEntriesList}>
          {projectEntries.map((entry: $TSFixMe) => (
            <li key={entry.filename}>
              <Link href={`/projects/${entry.filename}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noEntries}>
          No blog entries found. <Link href="/projects">View all projects</Link>
          .
        </p>
      )}
    </>
  );
}
