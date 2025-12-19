import {defineConfig} from "@solidjs/start/config";
import {createWithSolidBase, defineTheme} from "@kobalte/solidbase/config";
import defaultTheme from "@kobalte/solidbase/default-theme";
import tailwindcss from '@tailwindcss/vite';

import {DefaultThemeSidebarItem} from "@kobalte/solidbase/default-theme";
import {SidebarConfig} from "@kobalte/solidbase/client";






const NAV = [
    {
        status: {
            text: "custom",
            color: "#FF0000",
            textColor: "#FFFFFF"
        },
        text: "Guide",
        link: "/guide",
        activeMatch: "^/guide/"
    },
    {
        text: "Reference",
        link: "/reference",
    },
]


const SIDEBAR_ITEMS: SidebarConfig<DefaultThemeSidebarItem> | undefined = [
    {
        status: {
            text: "custom",
            color: "#FF0000",
            textColor: "#FFFFFF"
        },
        title: "Overview",
        collapsed: false,
        items: [
            {title: "Home", link: "/"},
            {title: "About", link: "/about", status: "new"}
        ]
    }
];

const customTheme =  defineTheme({
    componentsPath: import.meta.resolve("./src/jace-theme"),
    extends: defaultTheme,
});

export default defineConfig(
    createWithSolidBase(customTheme)(
    // SolidStart config
    {
        ssr: true,
        vite: {
          plugins: [tailwindcss()]
        },
        server: {
            prerender: {
                crawlLinks: true
            }
        }
    },
    // SolidBase config
    {
        title: "JGL",
        titleTemplate: "%s - JGL",
        description: "Bat Computer Operating System",





        themeConfig: {

            nav: NAV,
            socialLinks: {
                github: "https://github.com/your-repo",
                discord: "https://discord.gg/your-server",
                opencollective: "https://opencollective.com/your-project",
                custom: {
                    link: "https://example.com/",
                    logo: "/path/to/logo.svg",
                    label: "Logo label"
                },
            },

            sidebar: SIDEBAR_ITEMS,
        }
    }
));
