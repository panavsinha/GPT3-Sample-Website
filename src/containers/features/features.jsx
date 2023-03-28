import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo maiores esse doloribus expedita ut magni, aspernatur sint nesciunt, suscipit ipsam adipisci tempore exercitationem, eius aliquid sit minima quo.'
    },
    {
        title: 'Become the tended active',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo maiores esse doloribus expedita ut magni, aspernatur sint nesciunt, suscipit ipsam adipisci tempore exercitationem, eius aliquid sit minima quo.'
    },
    {
        title: 'Message or am nothing',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo maiores esse doloribus expedita ut magni, aspernatur sint nesciunt, suscipit ipsam adipisci tempore exercitationem, eius aliquid sit minima quo.'
    },
    {
        title: 'Really boy law county',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo maiores esse doloribus expedita ut magni, aspernatur sint nesciunt, suscipit ipsam adipisci tempore exercitationem, eius aliquid sit minima quo.'
    },
]
const features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The future is now and you just need to realize it. Step into the future today and make it happen.</h1>
                <p>Request early access to get started</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export default features