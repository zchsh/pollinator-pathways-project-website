import LayoutRoot from "@/components/layout-root";
// Types
import { SitewideQuery } from "../../../tina/__generated__/types";
import { PageTitle } from "@/components/page-title";
import Spacer from "@/components/spacer";
// Styles
import s from "./sitewide.module.css";

export default function Placeholder({ data }: { data: SitewideQuery }) {
  const { nav, footer } = data.sitewide;

  return (
    <LayoutRoot footer={footer} pathname="/sitewide" navBarItems={nav.items}>
      <Spacer h="2rem" />
      <PageTitle>Sitewide Content</PageTitle>
      <Spacer h="2rem" />
      <div className={s.pageContent}>
        <p>
          This page gives content editors a way to edit site-wide content, and
          to preview how those changes will affect the website. For example,
          changes to the navigation and footer can be made by editing this page.
        </p>
      </div>
    </LayoutRoot>
  );
}
