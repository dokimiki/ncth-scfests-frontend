import { createContext } from "react";

export const PageTitleContext = createContext({
    title: "",
    titlePrefix: "",
    titleSuffix: "",
    setPageTitle: (title: string) => {},
});
