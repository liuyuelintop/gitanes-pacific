import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderIcon({ firstWord, secondWord }) {
    return (
        <div>
            <Link to='/'>
                <h1 className="font-bold text-xl lg:text-3xl flex flex-wrap">
                    <span className="text-neutral-300 mx-2">{firstWord}</span>
                    <span className='text-neutral-400'>{secondWord}</span>

                    {/* <span className="text-neutral-400">{secondWord}</span> */}
                </h1>
            </Link>
        </div>
    )
}
