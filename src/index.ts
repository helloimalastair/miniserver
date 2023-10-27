import { Hono } from "hono";
import hest from "./hest.txt";
import { html } from "hono/html";

const app = new Hono();

app.get("/", ({ text }) => text("Hello, world!"));

app.get("/hest", async (c) => c.html(html`
	<!DOCTYPE html>
	<html>
		<head>
			<style>body { background-color: black; } pre { color: white; }</style>
		</head>
		<body>
			<pre>${hest}</pre>
		</body>
	</html>
	`)
);

app.get("/api/hest", ({ json }) => json({ navn: "Shadowspark", alder: 12, farve: "sort" }));

export default {
	fetch: app.fetch,
	port: 80
};