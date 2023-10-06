import React from 'react'
import { Link } from 'react-router-dom/dist'

const routes = () => {
    return (
        <div>
            <div className="buttons-container">
                <Link to="/2-CH-Form"><button className="CH-Form-button">2nd</button></Link>
                <Link to="/2-A-CH-Form"><button className="CH-Form-button">2-A</button></Link>
                <Link to="/4-CH-Form"><button className="CH-Form-button">4th</button></Link>
                <Link to="/5-CH-Form"><button className="CH-Form-button">5th</button></Link>
                <Link to="/5-CH-Form-B"><button className="CH-Form-button">5-B</button></Link>
                <Link to="/6-CH-Form"><button className="CH-Form-button">6th</button></Link>
                <Link to="/6-A-CH-Form"><button className="CH-Form-button">6-A</button></Link>
                <Link to="/6-B-CH-Form"><button className="CH-Form-button">6-B</button></Link>
                <Link to="/6-C-CH-Form"><button className="CH-Form-button">6-C</button></Link>
                <Link to="/7-CH-Form"><button className="CH-Form-button">7th</button></Link>
                <Link to="/7-B-CH-Form"><button className="CH-Form-button">7-B</button></Link>
                <Link to="/10-CH-Form"><button className="CH-Form-button">10th</button></Link>
                <Link to="/10-A-CH-Form"><button className="CH-Form-button">10-A</button></Link>
                <Link to="/11-CH-Form"><button className="CH-Form-button">11th</button></Link>
                <Link to="/18-CH-Form"><button className="CH-Form-button">18th</button></Link>
                <Link to="/21-CH-Form"><button className="CH-Form-button">21st</button></Link>
                <Link to="/23-CH-Form"><button className="CH-Form-button">23rd</button></Link>
                <Link to="/23-part2-CH-Form"><button className="CH-Form-button">23-II</button></Link>
                <Link to="/23-part3-CH-Form"><button className="CH-Form-button">23-III</button></Link>
                <Link to="/23-A-part1-CH-Form"><button className="CH-Form-button">23 A-I</button></Link>
                <Link to="/23-A-part2-CH-Form"><button className="CH-Form-button">23 A-II</button></Link>
                <Link to="/23-B-part1-CH-Form"><button className="CH-Form-button">23 B-I</button></Link>
                <Link to="/23-B-part2-CH-Form"><button className="CH-Form-button">23 B-II</button></Link>
                <Link to="/23-B-part3-CH-Form"><button className="CH-Form-button">23 B-III</button></Link>
            </div>
        </div>
    )
}

export default routes
