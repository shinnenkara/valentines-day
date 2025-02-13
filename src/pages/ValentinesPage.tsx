import {FC, useEffect} from 'react';
import {ValentinesGame} from './ValentinesGame.tsx';
import {ThemeMode, useAppContext} from '../state/AppContext.tsx';
import {useNavigate} from "react-router-dom";
import {modeBackgroundColor, modeButtonBackgrounds, modeColor, modeTextColor} from "../theme/styles.ts";
import DarkModeIcon from "../assets/icons/dark_mode_icon.svg";
import LightModeIcon from "../assets/icons/light_mode_icon.svg";

const styleIcons: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: DarkModeIcon,
    [ThemeMode.DARK]: LightModeIcon,
}

const setInitialTheme = (setTheme: (theme: ThemeMode) => void) => {
    if (!window.matchMedia) {
        console.log("No theme support");
        return;
    }

    const matchDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const params = new URLSearchParams(window.location.search);
    const queryStyleMode = params.get('theme');

    if (!queryStyleMode && matchDarkTheme.matches) {
        setTheme(ThemeMode.DARK);
    }

    matchDarkTheme.addEventListener('change', event => {
        if (event.matches) {
            setTheme(ThemeMode.DARK);
            return;
        }

        setTheme(ThemeMode.LIGHT);
    });
}

export const ValentinesPage: FC = () => {
    const { themeMode, setThemeMode } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        setInitialTheme(setThemeMode)
    }, [setThemeMode])

    const themeModeHandler = () => {
        if (themeMode === ThemeMode.LIGHT) {
            setThemeMode(ThemeMode.DARK);
            navigate('/?theme=dark')
            return;
        }

        navigate('/?theme=light')
        setThemeMode(ThemeMode.LIGHT);
    }

    useEffect(() => {
        document.body.style.backgroundColor = `${modeBackgroundColor[themeMode]}`;
    }, [themeMode]);

    return (
        <div className={`${modeTextColor[themeMode]}`}>
            <button className={`rounded-full absolute m-4 p-2 ${modeButtonBackgrounds[themeMode]}`} onClick={themeModeHandler}>
                <img className={`fill-${modeColor[themeMode]}`} src={styleIcons[themeMode]} alt={'Page light or dark mode button'}/>
            </button>
            <ValentinesGame />
        </div>
    )
}
