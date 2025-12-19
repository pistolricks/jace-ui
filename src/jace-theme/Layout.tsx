import {ComponentProps} from "solid-js";

import "./styles.css"
import RootLayout from "~/ui/layout";


export default function (props: ComponentProps<typeof RootLayout>) {
    return <RootLayout {...props}/>
}

