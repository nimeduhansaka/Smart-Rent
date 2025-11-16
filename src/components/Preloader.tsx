import { FC } from 'react';
import './Preloader.css';

type PreloaderProps = {
    visible: boolean;
};

const Preloader: FC<PreloaderProps> = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="preloader-overlay">
            <div className="loader">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
        </div>
    );
};

export default Preloader;