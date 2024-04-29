import { Link } from "@/types"

export const themes = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
    { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
]

export const sidebarLinks: Link[] = [
    {
        id: 1,
        route: "/",
        label: "Home",
    },
    {
        id: 2,
        route: "/community",
        label: "Community",
    },
    {
        id: 3,
        route: "/collection",
        label: "Collections",
    },
    {
        id: 4,
        route: "/tags",
        label: "Tags",
    },
    {
        id: 5,
        route: "/profile",
        label: "Profile",
    },
    {
        id: 6,
        route: "/ask-question",
        label: "Ask a question",
    },
]
  