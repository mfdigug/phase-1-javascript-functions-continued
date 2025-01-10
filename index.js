function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workActivity = 'go to the office') {
    return `This Monday, I will ${workActivity}.`;
}

function wrapAdjective(visualFlair = '*'){
    return function (encouragingPrompt = 'special') {
         return `You are ${visualFlair}${encouragingPrompt}${visualFlair}!`
     }; 
 };
