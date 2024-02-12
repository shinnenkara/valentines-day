import {createContext, FC, PropsWithChildren, useContext, useState} from "react";

export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
}

enum SupportedLanguages {
    EN = 'en',
}

type AppContextType = {
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
    language: SupportedLanguages;
};

const validateOrDefaultMode = (mode: string | null): ThemeMode => {
    const defaultMode = ThemeMode.LIGHT;
    if (!mode) {
        return defaultMode;
    }

    if (!Object.values(ThemeMode).includes(mode as ThemeMode)) {
        console.error(`Invalid mode: ${mode}`);
        return defaultMode;
    }

    return mode as ThemeMode;
}

const useValue = (): AppContextType => {
    const params = new URLSearchParams(window.location.search);
    const queryStyleMode = params.get('theme');
    const [themeMode, setThemeMode] = useState<ThemeMode>(
        validateOrDefaultMode(queryStyleMode)
    );

    return {
        themeMode,
        setThemeMode,
        language: SupportedLanguages.EN,
    };
};

const AppContext = createContext<AppContextType>(
    {} as ReturnType<typeof useValue>
);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
    <AppContext.Provider value={useValue()}>
        {children}
    </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
