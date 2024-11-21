import type { LinksFunction } from "@remix-run/node";


import appStylesHref from "../tailwind.css";
import {Header} from "~/Components/Header";



export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];


export default function Index() {
    return (
        <>
        <Header/>

                <div className="dossier">
                    <h2>Dossiers</h2>
                </div>

        </>
    );

}

