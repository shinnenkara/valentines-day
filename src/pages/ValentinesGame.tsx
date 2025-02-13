import {FC, JSX, useMemo, useState} from "react";
import {Modal} from "react-responsive-modal";
import {useAppContext} from "../state/AppContext.tsx";
import {borderColor, modeBackgrounds, modeButtonBackgrounds, modeTextColor} from "../theme/styles.ts";
import ChocolateIcon from "../assets/icons/chocolate.png";
import GitHubIcon from "../assets/icons/github-mark.svg";
import LoveIcon from "../assets/icons/love.png";

const profileLink = 'https://www.linkedin.com/in/oleksii-kharchenko-715430165/';
const contactLink = 'https://t.me/shinnenkara';
const projectLink = 'https://github.com/shinnenkara/valentines-day';

enum RelationState {
    HELLO,
    AGREEMENT,
    TALK,
    LOVE,
    KISS,
}

const gifs: Record<RelationState, JSX.Element> = {
    [RelationState.HELLO]: (
        <iframe src="https://giphy.com/embed/CsJW11ZqQKFEiGobgX" className={'size-60'} />
    ),
    [RelationState.AGREEMENT]: (
        <iframe src="https://giphy.com/embed/lRE0vhEO63vD8EDg1L" className={'size-60'} />
    ),
    [RelationState.TALK]: (
        <iframe src="https://giphy.com/embed/OqB5Oz1tNp6Q6Ld7tk" className={'size-60'}/>
    ),
    [RelationState.LOVE]: (
        <iframe src="https://giphy.com/embed/byLGLI5h3jwRaqd2qU" className={'size-60'}/>
    ),
    [RelationState.KISS]: (
        <iframe src="https://giphy.com/embed/lU1sNR33A1EhkK7ol7" className={'size-60'} />
    ),
};

const mainText: Record<RelationState, string | JSX.Element> = {
    [RelationState.HELLO]: 'Hi!',
    [RelationState.AGREEMENT]: 'Please accept...',
    [RelationState.TALK]: "There is a serious question ahead.",
    [RelationState.LOVE]: 'Will you be my Valentine?',
    [RelationState.KISS]: <div className={'flex flex-wrap'} >
        <span className={'mr-2'}>{'Yippee!'}</span>
        <img className={'w-10'} src={LoveIcon} alt={'Love icon'} />
    </div>,
};

const phrases: string[] = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Would you reconsider???",
    "Please?..",
    "Pookie please...",
    "I'll be very sad",
    "I'll be very very very sad",
    "Ok, I'll stop",
    "Just kidding, pookie, pleeeeese",
];

const DEFAULT_YES_SIZE = 16;

export const ValentinesGame: FC = () => {
    const {themeMode} = useAppContext();
    const [pageState, setPageState] = useState<RelationState>(
        RelationState.HELLO
    );
    const [modalIsOpen, setIsOpen] = useState(false);

    const [noCounter, setNoCounter] = useState(0);
    const [yesSize, setYesSize] = useState(DEFAULT_YES_SIZE);

    const hiHandler = () => {
        setIsOpen(true);
        setPageState(RelationState.AGREEMENT);
    }

    const yesHandler = () => {
        setPageState(RelationState.KISS);
    };

    const noHandler = () => {
        console.log('why, pookie...');
        setYesSize(yesSize + DEFAULT_YES_SIZE)

        if (noCounter === phrases.length - 1) {
            setNoCounter(0);
            return
        }

        setNoCounter(noCounter + 1);
    };

    const modalHandler = () => {
        console.log('Please accept, beg you..')
    };

    const agreeHandler = () => {
        setIsOpen(false);
        setPageState(RelationState.TALK);
    };

    const okHandler = () => {
        setPageState(RelationState.LOVE);
    }

    const buttons: Record<RelationState, JSX.Element> = useMemo(() => ({
        [RelationState.HELLO]: (
            <div className={'flex flex-wrap items-center justify-center gap-4'}>
                <button className={'bg-green-600 py-2 px-4 rounded hover:bg-green-700'} onClick={hiHandler}>
                        <span className={'text-white font-bold'}>{'Hello'}</span>
                </button>
            </div>
        ),
        [RelationState.AGREEMENT]: (<></>),
        [RelationState.TALK]: (
            <div className={'flex flex-wrap items-center justify-center gap-4'}>
                <button className={'bg-green-600 py-2 px-4 rounded hover:bg-green-700'} onClick={okHandler}>
                    <span className={'text-white font-bold'}>{'Ok'}</span>
                </button>
            </div>),
        [RelationState.LOVE]: (
            <div className={'flex flex-wrap items-center justify-center gap-4'}>
                <button className={'bg-green-600 py-2 px-4 rounded'} onClick={yesHandler}>
                        <span className={'text-white font-bold'} style={{
                            fontSize: yesSize,
                        }}>{'Yes'}</span>
                </button>
                <button className={'bg-red-600 py-2 px-4 rounded'} onClick={noHandler}>
                    <span className={'text-white font-bold'}>{phrases[noCounter]}</span>
                </button>
            </div>
        ),
        [RelationState.KISS]: (
            <div className={'flex flex-wrap items-center justify-center gap-4'}>
                <a className={'bg-pink-600 py-2 px-4 rounded hover:bg-pink-700'} href={contactLink}>
                    <span className={'text-white font-bold'}>{'Send a message'}</span>
                </a>
                <a className={'bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 flex flex-wrap'} href={projectLink}>
                    <img className={'mr-2 w-6'} src={GitHubIcon} alt={'GitHub Icon'} />
                    <span className={'text-white font-bold'}>{'Project link'}</span>
                </a>
            </div>
        ),
    }), [noCounter, yesSize]);

    return (
        <>
            <div className={'flex flex-col items-center justify-center gap-4 h-screen'}>
                {gifs[pageState]}
                <span className={'text-3xl text-center'}>{mainText[pageState]}</span>
                {buttons[pageState]}
            </div>
            <Modal classNames={{
                modal: `${modeBackgrounds[themeMode]} ${modeTextColor[themeMode]} rounded`
            }} open={modalIsOpen} onClose={modalHandler} showCloseIcon={false} center>
                <div className={'flex flex-col items-center justify-center gap-4'}>
                    <div className={'flex flex-wrap items-center justify-center gap-4'}>
                        <img className={'w-8'} src={ChocolateIcon} alt="Cookie Icon"/>
                        <span className={'font-bold'}>{'Chocolate Usage Agreement'}</span>
                    </div>
                    <p className={'indent-4 text-justify'}>{'By using our website, you consent to the use of chocolate for enhancing your experience. ' +
                        'We may use various types of chocolate for improving functionality and analyzing it consumption on website traffic. ' +
                        'You can manage your chocolate preferences, but disabling chocolate from your diet may affect your overall experience. ' +
                        'We take measures to ensure chocolate security, but we cannot guarantee against unauthorized access into your fridge. ' +
                        'By continuing to use the website, you agree to this Chocolate Usage Agreement and required to provide homemade chocolate to the '}
                    <a className={'text-blue-600'} href={profileLink}>{'creator'}</a>{' of this website.'}</p>
                    <button
                        className={`p-2 rounded ${borderColor[themeMode]} border-2 ${modeButtonBackgrounds[themeMode]}`}
                        onClick={agreeHandler}
                    >
                        {'I agree'}
                    </button>
                </div>
            </Modal>
        </>
    )
};
