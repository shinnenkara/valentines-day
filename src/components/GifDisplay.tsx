import {FC} from "react";

export enum RelationState {
    HELLO,
    AGREEMENT,
    TALK,
    LOVE,
    KISS,
}

export enum LoveType {
    W = 'w',
    M = 'm',
    WLW = 'wlw',
    MLM = 'mlm',
}

type GifConfig = Record<RelationState, Record<LoveType, string>>;

const gifs: GifConfig = {
    [RelationState.HELLO]: {
        [LoveType.W]: 'https://giphy.com/embed/CsJW11ZqQKFEiGobgX',
        [LoveType.M]: 'https://giphy.com/embed/QYSAbP0Eo79WFkLmMH',
        [LoveType.WLW]: 'https://giphy.com/embed/QYSAbP0Eo79WFkLmMH',
        [LoveType.MLM]: 'https://giphy.com/embed/CsJW11ZqQKFEiGobgX',
    },
    [RelationState.AGREEMENT]: {
        [LoveType.W]: 'https://giphy.com/embed/lRE0vhEO63vD8EDg1L',
        [LoveType.M]: 'https://giphy.com/embed/J8GJXqqQHGazGOil1u',
        [LoveType.WLW]: 'https://giphy.com/embed/J8GJXqqQHGazGOil1u',
        [LoveType.MLM]: 'https://giphy.com/embed/lRE0vhEO63vD8EDg1L',
    },
    [RelationState.TALK]: {
        [LoveType.W]: 'https://giphy.com/embed/OqB5Oz1tNp6Q6Ld7tk',
        [LoveType.M]: 'https://giphy.com/embed/2vRlK0JA84NjsiKH5r',
        [LoveType.WLW]: 'https://giphy.com/embed/2vRlK0JA84NjsiKH5r',
        [LoveType.MLM]: 'https://giphy.com/embed/OqB5Oz1tNp6Q6Ld7tk',
    },
    [RelationState.LOVE]: {
        [LoveType.W]: 'https://giphy.com/embed/byLGLI5h3jwRaqd2qU',
        [LoveType.M]: 'https://giphy.com/embed/a31Pc1tQLlAZYc1hZa',
        [LoveType.WLW]: 'https://giphy.com/embed/uk0Je8YSUn7gvYBOYA',
        [LoveType.MLM]: 'https://giphy.com/embed/WJ9ewpMnePFv6j1BZq',
    },
    [RelationState.KISS]: {
        [LoveType.W]: 'https://giphy.com/embed/lU1sNR33A1EhkK7ol7',
        [LoveType.M]: 'https://giphy.com/embed/jzkiCRT0c75fYr5auW',
        [LoveType.WLW]: 'https://giphy.com/embed/mPW0FtV26HRzMlTTpK',
        [LoveType.MLM]: 'https://giphy.com/embed/ZLGDj7CTA1PKIlQ2jx',
    },
};

interface GifDisplayProps {
    relationState: RelationState;
    loveType: LoveType;
}

export const GifDisplay: FC<GifDisplayProps> = ({ relationState, loveType }) => {
    const gifUrl = gifs[relationState][loveType];

    if (!gifUrl) {
        return null;
    }

    return <iframe src={gifUrl} className={'size-60'} />;
};
