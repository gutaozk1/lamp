const turnOnLamp = () => {
    const lampTop = document.querySelector('.lamp-top');
    
    const classListLampTop = [...lampTop.classList]
    const lampTopIsOn = classListLampTop.includes('lamp-on')
    
    const lampMiddle = document.querySelector('.lamp-middle');
    
    classListLampMiddle = [...lampMiddle.classList]
    const lampMiddleIsOn = classListLampMiddle.includes('lamp-on')
    
    if(!lampMiddleIsOn && !lampTopIsOn){
        lampMiddle.classList.add('lamp-on');
        lampTop.classList.add('lamp-on');
        const lampAudio = new Audio('lampSound.mp3');
        lampAudio.play();
    }
}

const turnOffLamp = () => {
    const lampTop = document.querySelector('.lamp-top');
    
    const classListLampTop = [...lampTop.classList]
    const lampTopIsOn = classListLampTop.includes('lamp-on')
    
    const lampMiddle = document.querySelector('.lamp-middle');
    
    classListLampMiddle = [...lampMiddle.classList]
    const lampMiddleIsOn = classListLampMiddle.includes('lamp-on')
    
    if(lampMiddleIsOn && lampTopIsOn){
        const lampAudio = new Audio('lampSound.mp3');
        lampAudio.play();
        lampMiddle.classList.remove('lamp-on');
        lampTop.classList.remove('lamp-on');
    }
}