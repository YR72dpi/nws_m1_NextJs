"use client"
import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function NotFound() {
    return (
        <div className='p-72'>
            <DotLottieReact
                src="nope.json"
                loop
                autoplay
            />
            <p>Rien à voir ici ! Ciao Bella !</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}