export const digitArray = (timeEl: number): number[] =>{

    if (timeEl === 0) return [0,0];
    if (timeEl < 10) return [0, timeEl];

    let array:number[] = [];
    while(timeEl > 0){
        array.push(Math.floor(timeEl%10));
        timeEl= Math.floor(timeEl/10);
    }
    return array.reverse();
}