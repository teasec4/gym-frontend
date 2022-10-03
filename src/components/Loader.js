import React from 'react';
import {motion} from 'framer-motion'
import {BiLoader} from "react-icons/bi";


const Loader = () => {
    return (
        <motion.div
            className='loader'
            initial={{ rotateZ: 360}}
            animate={{ rotateZ: 0 }}
            transition={{duration: 0.5, yoyo: Infinity, ease:"easeOut"}}
        >
            <BiLoader/>
        </motion.div>
    );
};

export default Loader;