import {ThemeMode} from "../state/AppContext.tsx";

export const modeButtonBackgrounds: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'hover:bg-gray-200',
    [ThemeMode.DARK]: 'hover:bg-gray-600',
}

export const modeTextColor: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'text-black',
    [ThemeMode.DARK]: 'text-white',
}

export const modeBackgrounds: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'bg-white',
    [ThemeMode.DARK]: 'bg-slate-800',
}

export const modeBackgroundColor: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'rgb(255 255 255)',
    [ThemeMode.DARK]: 'rgb(30 41 59)',
};

export const modeColor: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'black',
    [ThemeMode.DARK]: 'white',
}

export const borderColor: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: 'border-black',
    [ThemeMode.DARK]: 'border-white',
}
