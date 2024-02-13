import {FC, useEffect} from 'react';
import {ValentinesGame} from './ValentinesGame.tsx';
import {ThemeMode, useAppContext} from '../state/AppContext.tsx';
import {useNavigate} from "react-router-dom";
import {modeBackgrounds, modeButtonBackgrounds, modeColor, modeTextColor} from "../theme/styles.ts";
import DarkModeIcon from "../assets/icons/dark_mode_icon.svg";
import LightModeIcon from "../assets/icons/light_mode_icon.svg";

const styleIcons: Record<ThemeMode, string> = {
    [ThemeMode.LIGHT]: DarkModeIcon,
    [ThemeMode.DARK]: LightModeIcon,
}

export const ValentinesPage: FC = () => {
    const { themeMode, setThemeMode } = useAppContext();
    const navigate = useNavigate();

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
        document.body.className = `${modeBackgrounds[themeMode]}`;
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
