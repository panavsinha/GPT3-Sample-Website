import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>
                    Request early access to get started
                </h4>
                <h1 className='gradient__text'>
                    The possibilities are beyond our imagination
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nisi, deserunt quod maxime reprehenderit recusandae accusantium voluptate eos, velit numquam reiciendis facere ut possimus dolorem alias nemo atque quas fugiat.
                </p>
                <h4>
                    Request early access to get started
                </h4>
            </div>
        </div>
    )
}

export default possibility