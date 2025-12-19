// @refresh reload
import {createHandler, StartServer} from "@solidjs/start/server";
import {getHtmlProps} from "@kobalte/solidbase/server";
import {Link, Meta, MetaProvider, Title} from "@solidjs/meta";

export default createHandler(() => (
    <StartServer
        document={({assets, children, scripts}) => (
            <html {...getHtmlProps()}>
            <MetaProvider>
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <Title>batOS - BatComputer Operating System</Title>

                    <Meta name="keywords"
                          content="batman, batcomputer, desktop environment, operating system, solidjs, typescript, tailwind css, web desktop, batman theme, dark knight"/>
                    <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                    <Meta name="theme-color" content="#1e40af"/>
                    <Link rel="icon" href="/favicon.ico"/>
                    <Link rel="apple-touch-icon" href="/batman-logo.png"/>
                    {/*<Link rel="manifest" href="/site.webmanifest"/>*/}
                    <link rel="icon" href="/favicon.ico"/>
                    {assets}
                </head>
                <body>
                <div id="app">{children}</div>
                {scripts}
                </body>
            </MetaProvider>
            </html>
        )}
    />
));
