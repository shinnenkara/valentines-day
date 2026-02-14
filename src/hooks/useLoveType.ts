import { useState, useEffect } from 'react';
import { LoveType } from '../components/GifDisplay';

export const useLoveType = (): LoveType => {
    const [loveType, setLoveType] = useState<LoveType>(LoveType.W);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const loveParam = params.get('love');

        if (loveParam) {
            const normalizedParam = loveParam.toLowerCase();
            
            switch (normalizedParam) {
                case 'w':
                    setLoveType(LoveType.W);
                    break;
                case 'm':
                    setLoveType(LoveType.M);
                    break;
                case 'wlw':
                    setLoveType(LoveType.WLW);
                    break;
                case 'mlm':
                    setLoveType(LoveType.MLM);
                    break;
                default:
                    setLoveType(LoveType.W);
            }
        }
    }, []);

    return loveType;
};
