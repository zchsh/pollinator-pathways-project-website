import s from "./style.module.css";

export function BlogMetadata({
  metadata,
}: {
  metadata: { author: string; date: string };
}) {
  const { author, date } = metadata;
  // Format the date as `Month DD, YYYY`
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //
  return (
    <div className={s.metadata}>
      <div className={s.author}>
        <div className={s.authorIcon}>🌻</div>
        <div className={s.authorName}>{author}</div>
      </div>
      <div className={s.metadataDivider}>•</div>
      <div className={s.date}>{formattedDate}</div>
      {/* TODO: actually implement reading time */}
      {/*<div className={s.metadataDivider}>•</div>*/}
      {/*<div className={s.readingTime}>{`2 min read`}</div>*/}
    </div>
  );
}
