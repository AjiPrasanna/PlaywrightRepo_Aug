

/* function student(score){

    let marks = score;

    switch(true){

        case marks >= 90 :
            console.log('First class');
            break;

        case marks >= 80 :
            console.log('Second class');
            break;

              case marks >= 50 :
            console.log('Third class');
            break;
            
            default:
                console.log('Pass..');        
    }
} student(91) */

// Example 2 

function students(score){

    let marks = score;

    switch(true){

        case marks >= 90:
            console.log("A grade");
           break;

        case marks >= 80:
            console.log("B grade");
            break;

        case marks >= 60:
            console.log("C grade");
            break;

            default:
                console.log('Pass....');
                      
    }

}students(49)