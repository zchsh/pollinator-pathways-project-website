import s from "./page.module.css";

export default function Home({ data }: $TSFixMe) {
	const { foobar } = data.homepage;

	return (
		<main>
			<div className={s.placeholder}>
				HOME PAGE PLACEHOLDER
				<pre>
					<code>{JSON.stringify({ foobar }, null, 2)}</code>
				</pre>
			</div>
		</main>
	);
}
