// Components
import LayoutRoot from "@/components/layout-root";
import Spacer from "@/components/spacer";
import { PageTitle } from "@/components/page-title";
// ...
import getSitewideData from "@/lib/get-sitewide-data";
import { ProjectEntriesList } from "./components/project-entries-list";
import { fetchProjectsList } from "./utils/fetch-projects-list";

export default async function Projects() {
  const { footer, nav } = await getSitewideData();

  const projectEntries = await fetchProjectsList();

  return (
    <LayoutRoot footer={footer} pathname="/projects" navBarItems={nav.items}>
      <Spacer h="2rem" />
      <PageTitle>Projects</PageTitle>
      <Spacer h="1rem" />
      <ProjectEntriesList projectEntries={projectEntries} />
    </LayoutRoot>
  );
}

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export const metadata = {
  title: "Projects" + METADATA_TITLE_SUFFIX,
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};
