import {AiFillHeart} from 'react-icons/ai'

import {RiTelegramFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    return(
        <div className="container mt-3 mb-1">
                <div className='d-flex justify-content-between'>
                    <a href='https://www.instagram.com/kovalev__maksim__/' className='text-dark fs-4'>
                        <AiOutlineInstagram/>
                    </a>
                    <p className='text-dark fs-4'>
                        2022
                    </p>
                    <a href='https://www.t.me/teasec4' className='text-dark fs-4'>
                        <RiTelegramFill/>
                    </a>
                </div>
        </div>
    )
}

export default Footer