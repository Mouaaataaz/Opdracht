import {
    Links, LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";


import "./tailwind.css";
import {Header} from "~/Components/Header";
import appStylesHref from "./app.css?url";


export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
        <Header />
        <Outlet/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload/>
        </body>
        </html>
    );
}

