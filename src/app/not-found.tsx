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
            <h2>Nop !</h2>
            <p>Not Found</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}