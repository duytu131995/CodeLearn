function timeCalculation(s){
    let hours = Math.floor(s / 3600);
    if(hours >= 0 && hours <= 9){ hours = '0' + hours; };
    let minutes = Math.floor((s / 60) % 60);
    if(minutes >= 0 && minutes <= 9){ minutes = '0' + minutes; }
    let seconds = s % 60;
    if(seconds >= 0 && seconds <= 9){ seconds = '0' + seconds; }

    return hours + ':' + minutes + ':' + seconds ;
}
