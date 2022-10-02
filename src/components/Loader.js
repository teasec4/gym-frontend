import React from 'react';
import {motion} from 'framer-motion'
import {BiLoader} from "react-icons/bi";


const Loader = () => {
    return (
        <motion.div
            initial={{ rotateZ: 360, color:'black' }}
            animate={{ rotateZ: 0 , color:'green'}}
            transition={{duration: 0.5, yoyo: Infinity}}
        >
            <BiLoader/>
        </motion.div>
    );
};

export default Loader;