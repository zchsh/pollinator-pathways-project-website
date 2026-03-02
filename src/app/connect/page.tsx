import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export const metadata = {
  title: "Connect" + METADATA_TITLE_SUFFIX,
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};

export default async function Page() {
  const { footer, nav } = await getSitewideData();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/connect">
      <PageServer />
    </LayoutRoot>
  );
}
