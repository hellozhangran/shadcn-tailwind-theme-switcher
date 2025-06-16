import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme | ""
}

export type ColorTheme = "rose" | "green" | "violet"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  colorTheme: ColorTheme
  setColorTheme: (colorTheme: ColorTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  colorTheme: "rose",
  setColorTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const themeKey = "vite-ui-theme"
const colorThemeKey = "vite-ui-color-theme"

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorTheme = "",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(themeKey) as Theme) || defaultTheme
  )

  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () => (localStorage.getItem(colorThemeKey) as ColorTheme) || defaultColorTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement;
    // Apply color theme
    if (colorTheme) {
      root.setAttribute("data-theme", colorTheme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [colorTheme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeKey, theme)
      setTheme(theme)
    },
    colorTheme,
    setColorTheme: (colorTheme: ColorTheme) => {
      localStorage.setItem(colorThemeKey, colorTheme)
      setColorTheme(colorTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme 必须在 ThemeProvider 内使用")

  return context
}
