import { createContext } from "react";

export const THEME = {
    EN : {
        curr: "en"
    },
    ID : {
        curr: "id"
    },
};

export const ThemeContext = createContext(THEME.EN);