"use client"

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { afrigoTheme } from "@/lib/mui-theme"

interface ThemeProviderProps {
    children: React.ReactNode
}

export function MuiThemeProvider({ children }: ThemeProviderProps) {
    return (
        <MUIThemeProvider theme={afrigoTheme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    )
}
