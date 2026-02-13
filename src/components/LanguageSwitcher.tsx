import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from './ui/button';

export const LanguageSwitcher: FC = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ua' : 'en';
        i18n.changeLanguage(newLang);
        
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLang);
        window.history.pushState({}, '', url);
    };

    return (
        <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'EN' : 'UA'}
        </Button>
    );
};
