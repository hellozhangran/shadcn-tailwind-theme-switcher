import { Button } from "@/shadcn/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/dropdown-menu";
import { useTheme } from "@/theme/theme-provider";
import type { ColorTheme } from "@/theme/theme-provider";

const themes = [
  "rose",
  "green",
  "violet",
];

export function ColorThemeToggle() {
  const { setColorTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((color) => (
          <DropdownMenuItem key={color} onClick={() => setColorTheme(color as ColorTheme)}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
