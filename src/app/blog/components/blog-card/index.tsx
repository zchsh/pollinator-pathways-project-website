import Link from "next/link";
import Image from "next/image";
import s from "./style.module.css";
import { PropsWithChildren } from "react";

export function BlogCard({ entry }: { entry: $TSFixMe }) {
  const hasImage =
    typeof entry.coverImage === "string" && entry.coverImage !== "";
  //
  if (hasImage) {
    return (
      <Link href={`/blog/${entry.filename}`}>
        <Card>
          <CardSplit
            sectionOne={
              <div className={s.cardImageContainer}>
                <Image
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src={entry.coverImage}
                  alt={entry.coverImageAlt || ""}
                />
                {/*<img
                src={entry.coverImage}
                alt={entry.coverImageAlt || ""}
              />*/}
              </div>
            }
            sectionTwo={<BlogCardInfo entry={entry} />}
          />
        </Card>
      </Link>
    );
  } else {
    return (
      <Link href={`/blog/${entry.filename}`}>
        <Card>
          <BlogCardInfo entry={entry} />
        </Card>
      </Link>
    );
  }
}

function BlogCardInfo({ entry }: { entry: $TSFixMe }) {
  return (
    <div className={s.cardInfoContainer}>
      <pre>
        <code>{JSON.stringify(entry, null, 2)}</code>
      </pre>
    </div>
  );
}

function Card({ children }: PropsWithChildren<{}>) {
  return <div className={s.cardRoot}>{children}</div>;
}

function CardSplit({
  sectionOne,
  sectionTwo,
}: {
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
}) {
  return (
    <div className={s.cardSplit}>
      <div className={s.cardSplit_sectionOne}>{sectionOne}</div>
      <div className={s.cardSplit_sectionTwo}>{sectionTwo}</div>
    </div>
  );
}
