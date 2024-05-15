import { extendTheme } from "native-base";

export const THEMES = extendTheme({
    colors: {
        green: {
            800: '#3c515d',
            500: '#3d6868',
            200: '#a7c686'
        },
        yellow : {
            500: '#fcee8c',
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg:20,
        xl:24
    }
})