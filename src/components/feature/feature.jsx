import React from 'react'
import './feature.css'

const feature = ({ title, text }) => {
    return (
        <div className='gpt3__features-containers__feature'>
            <div className='gpt3__features-containers__feature-title'>
                <div></div>
                <h1>{title}</h1>
            </div>
            <div className='gpt3__features-container_feature-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default feature