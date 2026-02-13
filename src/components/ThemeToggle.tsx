import {FC} from 'react';
import {useTheme} from 'next-themes';
import DarkModeIcon from "../assets/icons/dark_mode_icon.svg";
import LightModeIcon from "../assets/icons/light_mode_icon.svg";

const styleIcons: Record<string, string> = {
    'light': DarkModeIcon,
    'dark': LightModeIcon,
}

export const ThemeToggle: FC = () => {
    const { theme, setTheme } = useTheme();

    const themeModeHandler = () => {
        if (theme === 'light') {
            setTheme('dark');
            return;
        }

        setTheme('light');
    }

    return (
        <button className="rounded-full p-2 hover:bg-muted" onClick={themeModeHandler}>
            <img src={styleIcons[theme || 'light']} alt={'Page light or dark mode button'}/>
        </button>
    );
}
