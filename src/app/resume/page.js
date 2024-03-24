import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
const Resume = () => {
    return (
        <div className="App">
            <Navbar />
            <div>Resume</div>
            <iframe 
            width={500}
            height={500}
            src='https://drive.google.com/file/d/1CTq_4IgNYyyT8GtqyqDcwcvafwAz1yoX/view?usp=sharing'></iframe>
        </div>
    )
}

export default Resume
