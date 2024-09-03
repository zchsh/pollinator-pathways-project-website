import getIsPreviewEnabled from "@/lib/get-is-preview-enabled";
import PageClientReusable from "./page-client-reusable";

export default function EditablePage({ res, PageComponent }: $TSFixMe) {
	if (getIsPreviewEnabled()) {
		return <PageClientReusable {...res} PageComponent={PageComponent} />;
	} else {
		return <PageComponent {...res} />;
	}
}
