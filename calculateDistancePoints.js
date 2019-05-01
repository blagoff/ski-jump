const calculateDistancePoints = (hillSize, distance, kPoint) => {
    let Points, ratio;

    switch(hillSize) {
        case 'normal':
            Points = 60;
            ratio = 2;
            break;
        case 'large':
            Points = 120;
            ratio = 1.8;
            break;
        case 'mammoth':
            Points = 120;
            ratio = 1.2;
            break; 
    }

   let result = Points + (distance - kPoint) * ratio;

   if(result < 0){
       return 0;
   }else{
       return result;
   }

  };
  
  module.exports = calculateDistancePoints;

