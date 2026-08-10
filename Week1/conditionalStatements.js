

/* function launchBroweser(browserName){

    if(browserName == 'Chrome'){

      console.log(browserName);
    }else{
        console.log('Browser is not Chrome');
        
    }

} launchBroweser('Chrome') */


function launchBrowser(browserName){

    if (browserName === 'Safari') {
        console.log('Safari...');  
    }else {
        console.log('Not safari');   
    }
}launchBrowser('Safari')


// Use Switch Case

/* function runTests(testType){

    switch (testType) {

         case 'smoke':
            console.log("smoke");
             break;

        case 'sanity':
            console.log("Sanity");
             break;

              case 'regression':
            console.log("Regression");
             break;

        default:
            console.log("Smoke Testing..... ");
                
    }
} runTests('smoke') */

// Example 2

function runTest(testType){

    switch (testType){

        case 'automation':
            console.log('Automation Testing...');
            break;

            case 'functional':
                console.log('Functional Testing.....');
                break;

                default:
                    console.log('Manual Test');                 
    }   
}
runTest('automation')
