// var x = document.getElementsByClassName('grade');
// var sum = 0;
// for (let i = 0; i < x.length; i++){
//     console.log(x[i].innerHTML);
//     let spans = x[i].classList;
//     if (!spans.contains("cell")){
//         if (x[i].innerHTML === "-"){
//             continue;
//         }
//         sum += parseFloat(x[i].innerHTML);
//         console.log(x[i].innerHTML);
//     }
// }
// console.log(sum);

chrome.runtime.onMessage.addListener(gotMessage);
var ret = "";
function gotMessage(message, sender, sendResponse){
    if (message === "hi"){
        var breaky = false;
        var x = document.getElementsByClassName('cell grade');
        for (let i = 0; i < x.length; i++){
            let spans = x[i].getElementsByTagName('span');
            for (let j = 0; j < spans.length; j++){
                if (j == 0 && spans[j].innerHTML === "-"){
                    breaky = true;
                    break;
                }
                ret = ret.concat(spans[j].innerHTML);
            }
            if (!breaky){
                ret = ret.concat("I");
            }
            else {
                breaky = false;
            }
        }
        chrome.runtime.sendMessage(ret);
    }
    else {
        const grades = message.grades;
        let sum = 0;
        for (let i = 0; i < grades.length; i++){
            const course_grade = grades[i].split("I");
            const final_course_grade = course_grade[1].split("/");
            var num1 = parseFloat(final_course_grade[0]);
            var num2 = parseInt(final_course_grade[1]);
            var grade = num1/num2;
            if(grade >= 0.93) sum += 4;
            else if (grade >=0.90) sum += 3.7;
            else if (grade >=0.87) sum += 3.3;
            else if (grade >=0.83) sum += 3.0;
            else if (grade >=0.80) sum += 2.7;
            else if (grade >=0.77) sum += 2.3;
            else if (grade >=0.73) sum += 2.0;
            else if (grade >=0.70) sum += 1.7;
            else if (grade >=0.67) sum += 1.3;
            else if (grade >=0.65) sum += 1.0;
        }
        var avg = sum/grades.length;
        var message = 'Your GPA: '+avg;
        document.body.innerHTML = message;
    }
}
