import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>
                    Let's build something amazing with GPT-3 OpenAI
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur blanditiis autem rerum illo eaque deleniti, sequi facere eveniet amet accusamus veritatis nam tempora laboriosam voluptate recusandae aliquam optio culpa.</p>
                <div className='gpt3__header-content__input'>
                    <input type="email" placeholder='Your e-mail address' />
                    <button type='button'>Get started</button>
                </div>
                <div className='gpt3__header-content__people'>
                    <img src={people} alt="people" />
                    <p>1,600+ people requested access</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt="AI" />
            </div>
        </div>
    )
}

export default header