import {defineConfig} from "@solidjs/start/config";
import {withSolidBase} from "@kobalte/solidbase/config";
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
] as const;
export default defineConfig(withSolidBase(
    // SolidStart config
    {
        ssr: true,
        server: {
            prerender: {
                crawlLinks: true
            }
        }
    },
    // SolidBase config
    {
        title: "JGL",
        titleTemplate: ":title - Jace Group",
        description: "Jace Group UI",
        logo: "",

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
            sidebar: SIDEBAR_ITEMS
        }
    }
));
