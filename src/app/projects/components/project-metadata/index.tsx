import s from "./style.module.css";

export function ProjectMetadata({ metadata }: { metadata: { date: string } }) {
  const { date } = metadata;

  //
  // Format the date as `Month DD, YYYY`
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // Check if the date is valid before rendering

  //
  return (
    <div className={s.metadata}>
      {/*<div className={s.author}>
        <div className={s.authorIcon}>🌻</div>
        <div className={s.authorName}>{author}</div>
      </div>*/}
      {/*<div className={s.metadataDivider}>•</div>*/}
      <div className={s.date}>{formattedDate}</div>
      {/* TODO: actually implement reading time */}
      {/*<div className={s.metadataDivider}>•</div>*/}
      {/*<div className={s.readingTime}>{`2 min read`}</div>*/}
    </div>
  );
}
