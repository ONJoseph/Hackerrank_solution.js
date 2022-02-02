function birthdayCakeCandles(candles) {
    let blownCandleCount = 0;
    
    let max = 0;
    
    for(let i=0; i<candles.length; i++){
        if(candles[i]> max){
            max = candles[i];
            blownCandleCount = 1;
        } else{
            if(max==candles[i]){
                blownCandleCount++;
            }
        }
    }
    return blownCandleCount;
}
