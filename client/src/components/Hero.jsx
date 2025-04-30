import React, { useEffect } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-img.webp'

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    if (target) {
        target.setAttribute('style', 'color:' + colors[0]);
    }
    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            if (target) {
                target.innerHTML = words[0].substring(0, letterCount);
            }
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                if (target) {
                    target.setAttribute('style', 'color:' + colors[0]);
                }
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            if (target) {
                target.innerHTML = words[0].substring(0, letterCount);
            }
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            if (con) {
                con.className = 'hero-h3 hidden';
            }
            visible = false;
        } else {
            if (con) {
                con.className = 'hero-h3';
            }
            visible = true;
        }
    }, 400)
}


const Hero = () => {
    useEffect(() => {
        consoleText(['Hello!', 'Get Organized!', 'Track your workouts.'], 'text', ['ivorywhite','lightgreen','lightblue']);
    }, []);
    return (
        <div className="hero-section">
            <div className="hero-text">
                <div className="hero-text-container">
                    <span id='text'></span><div className='hero-h3' id='console'>&#95;</div>
                </div>
                <p>Use our built in workout splits or build custom splits as per your need.</p>
                <Link to="/login" className='hero-login-btn'>Get started <IoMdArrowDropright /></Link>
            </div>
        </div>
    );
}

export default Hero;