import React from 'react';
import item from './item.module.scss'

import {
    AiFillHtml5,
} from 'react-icons/ai';

import {
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoSass,
    BiLogoRedux,
} from 'react-icons/bi';

import {
    FaNodeJs,
} from 'react-icons/fa';

interface ItemProps {
    name: string;
    text: string;
    history: string;
    image: string;
    logo: string;
    stack: string[];
    url: string;
}

const ProjectItem: React.FC<ItemProps> = ({ name, text, history, image, logo, stack, url }) => {
    console.log(image)
    return (
        <div className={`${item.item} df jcc`}>
            <a href={url} className='cp w50 tdn cw' target='_blank'>
                <div className={`${item.left}`}>
                    <div className={`${item.img} w100 df jcc aic`}>
                        <img src={image} alt="image of the site" />
                    </div>
                    <div className={`${item.footer} df jcsb`}>
                        <div className={`${item.leftfooter} df`}>
                            <div className={`${item.logo} df jcc aic`}>
                                <img src={logo} alt="logo of the site" className='w100' />
                            </div>
                            <div className={`${item.names} df fdc aifs`}>
                                <p>{name}</p>
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className={`${item.rightfooter} df aic`}>
                            <p>Написан на:</p>
                            {stack.includes('html') ? <AiFillHtml5 style={{color: 'rgb(255, 102, 0)'}} /> : ''}
                            {stack.includes('css') ? <BiLogoCss3 style={{color: 'rgb(0, 153, 255)'}} /> : ''}
                            {stack.includes('js') ? <BiLogoJavascript style={{color: 'rgb(239, 243, 0)'}} /> : ''}
                            {stack.includes('react') ? <BiLogoReact style={{color: 'rgb(0, 204, 255)'}} /> : ''}
                            {stack.includes('redux') ? <BiLogoRedux style={{color: 'rgb(170, 0, 220)'}} /> : ''}
                            {stack.includes('ts') ? <BiLogoTypescript style={{color: 'rgb(0, 149, 218)'}} /> : ''}
                            {stack.includes('nodejs') ? <FaNodeJs style={{color: 'rgba(0, 255, 13, 0.658)'}} /> : ''}
                            {stack.includes('sass') ? <BiLogoSass style={{color: 'rgb(240, 0, 200)'}} /> : ''}
                        </div>
                    </div>
                </div>
            </a>
            <div className={`${item.right}`}>
                <div className={`${item.title} w100 df jcc aic`}>
                    <p>{text}</p><p style={{ color: 'lime', marginLeft: '7.5px' }}>{name}!</p>
                </div>
                <div className={`${item.text} w100`}>
                    <p>{history}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;