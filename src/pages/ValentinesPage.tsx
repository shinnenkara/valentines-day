import {FC} from 'react';
import {ValentinesGame} from './ValentinesGame.tsx';
import {useTheme} from 'next-themes';
import DarkModeIcon from "../assets/icons/dark_mode_icon.svg";
import LightModeIcon from "../assets/icons/light_mode_icon.svg";

const styleIcons: Record<string, string> = {
    'light': DarkModeIcon,
    'dark': LightModeIcon,
}

export const ValentinesPage: FC = () => {
    const { theme, setTheme } = useTheme();

    const themeModeHandler = () => {
        if (theme === 'light') {
            setTheme('dark');
            return;
        }

        setTheme('light');
    }


    return (
        <div className="text-foreground">
            <button className="rounded-full absolute m-4 p-2 hover:bg-muted" onClick={themeModeHandler}>
                <img src={styleIcons[theme || 'light']} alt={'Page light or dark mode button'}/>
            </button>
            <ValentinesGame />
        </div>
    )
}
