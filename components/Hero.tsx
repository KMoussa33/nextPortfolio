import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '<GalWhoLovesToCode />',
            'Hi, my name is Kelsey Moussa',
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className=''>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#2e8544' />
            </h1>
        </div>
    );
}

export default Hero;