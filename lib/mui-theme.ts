"use client"

import { createTheme } from "@mui/material/styles"

// Afrigo custom theme for Material UI
export const afrigoTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1a3a52",
            light: "#6797bb",
            dark: "#102332",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#2d7a3a",
            light: "#67c377",
            dark: "#1b4923",
            contrastText: "#ffffff",
        },
        error: {
            main: "#ef4444",
        },
        warning: {
            main: "#f59e0b",
        },
        info: {
            main: "#3b82f6",
        },
        success: {
            main: "#22c55e",
        },
        background: {
            default: "#ffffff",
            paper: "#f8fafc",
        },
        text: {
            primary: "#1a3a52",
            secondary: "#64748b",
        },
    },
    typography: {
        fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 24px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    },
                },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: "#152e42",
                    },
                },
                containedSecondary: {
                    "&:hover": {
                        backgroundColor: "#24622e",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    padding: "24px 0",
                },
            },
        },
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontWeight: 500,
                    "&.Mui-active": {
                        fontWeight: 600,
                    },
                    "&.Mui-completed": {
                        fontWeight: 600,
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        borderRadius: 12,
                    },
                },
            },
        },
    },
})

// Dark theme variant
export const afrigoDarkTheme = createTheme({
    ...afrigoTheme,
    palette: {
        mode: "dark",
        primary: {
            main: "#6797bb",
            light: "#8db1cc",
            dark: "#1a3a52",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#67c377",
            light: "#8dd299",
            dark: "#2d7a3a",
            contrastText: "#ffffff",
        },
        background: {
            default: "#0b1721",
            paper: "#102332",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b3cbdd",
        },
    },
})
