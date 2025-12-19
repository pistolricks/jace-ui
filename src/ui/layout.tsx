import {ComponentProps} from "solid-js";
import Layout from "@kobalte/solidbase/default-theme/Layout.jsx";


export default function RootLayout(props: ComponentProps<typeof Layout>) {
    return (
        <Layout {...props} />
    );
}