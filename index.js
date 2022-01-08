const turnOnLamp = () => {
    const lampTop = document.querySelector('.lamp-top');
    
    const classListLampTop = [...lampTop.classList]
    const lampTopIsOn = classListLampTop.includes('lamp-on')
    
    if(!lampTopIsOn){
        lampTop.classList.add('lamp-on');
    }
    
    const lampMiddle = document.querySelector('.lamp-middle');
    
    classListLampMiddle = [...lampMiddle.classList]
    const lampMiddleIsOn = classListLampMiddle.includes('lamp-on')
    
    if(!lampMiddleIsOn){
        lampMiddle.classList.add('lamp-on');
    }
}

const turnOffLamp = () => {
    const lampTop = document.querySelector('.lamp-top');
    
    const classListLampTop = [...lampTop.classList]
    const lampTopIsOn = classListLampTop.includes('lamp-on')
    
    if(lampTopIsOn){
        lampTop.classList.remove('lamp-on');
    }
    
    const lampMiddle = document.querySelector('.lamp-middle');
    
    classListLampMiddle = [...lampMiddle.classList]
    const lampMiddleIsOn = classListLampMiddle.includes('lamp-on')
    
    if(lampMiddleIsOn){
        lampMiddle.classList.remove('lamp-on');
    }
}