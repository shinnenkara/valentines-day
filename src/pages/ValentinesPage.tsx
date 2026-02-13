import {FC} from 'react';
import {ValentinesGame} from './ValentinesGame.tsx';
import {LanguageSwitcher} from '../components/LanguageSwitcher';
import {ThemeToggle} from '../components/ThemeToggle';

export const ValentinesPage: FC = () => {
    return (
        <div className="text-foreground">
            <div className="absolute top-4 left-4">
                <ThemeToggle />
            </div>
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>
            <ValentinesGame />
        </div>
    )
}
