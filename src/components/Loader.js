import React from 'react';
import {motion} from 'framer-motion'
import {AiOutlineLoading} from "react-icons/ai";


const Loader = () => {
    return (
        <motion.div
            initial={{ rotateZ: 360, color:'black' }}
            animate={{ rotateZ: 0 , color:'green'}}
            transition={{duration: 0.5, yoyo: Infinity}}
        >
            <AiOutlineLoading/>
        </motion.div>
    );
};

export default Loader;