import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const whatgpt3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur blanditiis autem rerum illo eaque deleniti, sequi facere eveniet amet accusamus veritatis nam tempora laboriosam voluptate recusandae aliquam optio culpa." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Explore the library
                </p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur blanditiis autem rerum illo eaque deleniti, sequi facere eveniet amet accusamus veritatis nam tempora laboriosam voluptate recusandae aliquam optio culpa." />
                <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur blanditiis autem rerum illo eaque deleniti, sequi facere eveniet amet accusamus veritatis nam tempora laboriosam voluptate recusandae aliquam optio culpa." />
                <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur blanditiis autem rerum illo eaque deleniti, sequi facere eveniet amet accusamus veritatis nam tempora laboriosam voluptate recusandae aliquam optio culpa." />
            </div>
        </div>
    )
}

export default whatgpt3