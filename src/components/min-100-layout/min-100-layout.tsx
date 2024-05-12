/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import s from "./min-100-layout.module.css";
import type { PropsWithChildren, ReactNode } from "react";

function Min100Layout({
	children,
	footer,
}: PropsWithChildren<{
	/* Render slot for the footer, to be displayed at the bottom of the page. */
	footer: ReactNode;
}>): React.ReactElement {
	return (
		<div className={s.root}>
			<div className={s.children}>{children}</div>
			<div className={s.footer}>{footer}</div>
		</div>
	);
}

export default Min100Layout;
