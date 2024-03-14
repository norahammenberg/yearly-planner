//access the date api that is built in the web browser

//setting states that can change through out the web app use be declaring let variables. 
//Get element by ID variables:
const heading = document.getElementById("heading");
const yearContainer = document.getElementById("year-container");
const calenderCointainer = document.getElementById("calander-container");
const calenderMonths = document.getElementsByClassName("month-container");
const calanderDays = document.getElementById("calander-days");
const buttonRight = document.getElementById("button-right");
// Date related variables:

//getting todays date
const date = new Date();

const currentYear = date.getFullYear();

//creating an array of the months so they can be displayed by name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const currentMonth = months[date.getMonth()];

const daysByNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const currentDayDate = daysByNumber[date.getDate() - 1];

const days = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"]
const currentDayByName = days[date.getDay()];

let widthViewPort;
//creating a dynamic header so year is correct:
heading.append (currentYear + " Yearly Planner");

function displayMonths () {
    
    //looping through the month array, every months is saved in the month and the index of the array is saved in the i
    months.forEach((month, i) => {
    
        /* what you need to do is to count out how many empty divs should be there. */
        //finding out what day is the 1st day of every month by getting the Day (whish is days a week in nmbers)
        const firstDayMonth = new Date(currentYear, i, 1).getDay();
        //get how many dasy in a month by new date the year he month we in + 1 because it starts at 0 and then day 0, we get the date as the date is the date of the day by number
        const daysInMonth = new Date(currentYear, i + 1, 0).getDate();//in javascript 0 is the last day of the previus month.
        
        //finding out how many empty day there is in every month by taking the number 
        //of the first day in the month minues 1. for example: if Thursday is the first day in the month we need Monday-Wedsday to be empty.
        //thursday is day 4th in the week by the take minus 1 we get 3 whitch equals the day that needs to be empty. 
        let emptyDays = firstDayMonth -1;
        if(emptyDays === -1){
            emptyDays = 6;
        }

        //creating all relevent html to display the months:
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        div.className = "month-container";
        div.id = month;

         //finding the odd index numbers of the months array to be able to seperat the colours for the different months. 
         if (i % 2 === 1) {
            div.className = "month-container odd";
        };
         //Looping through the days and create there HTML elements.
        /* be looping through the days in a month plus the amount of empty days we will create the display of the days.
        we using the for loop as we kno how many times we need to display the month. */
        for (j = 0; j <= daysInMonth + emptyDays; j++) {
            
            const divDay = document.createElement("div");
            const emptyDiv = document.createElement("div");
            const pDay = document.createElement("p");
            const pNum = document.createElement("p");

            if ( i >= 0 && i <= 5) {
                console.log("first div");
                div.className = "month-container-first"
            }
            else {
                console.log("second div")
                div.className = "month-container-firsecondst"
            }
            divDay.className = "day";
            if (j == emptyDays) {
                h2.append(month);
                div.appendChild(h2);
                calenderCointainer.appendChild(div);
            }
            //if i is equal to or less the empty days (epty days are in the loop) display empty squears. 
            else if (j <= emptyDays) {   
                emptyDiv.className = "empty-day day ";
                //need to unsert an empty day day before
                div.appendChild(emptyDiv);   
            } 
             
            else  { 
                //console.log(i)
                pDay.append(days[j%days.length]);//I needed it to loop but when I used a loop it looped over and over again
                //but I realized i just needed to use current i and the then reminding to loop through the days again an dagain.
                pNum.append(j - emptyDays);
                divDay.appendChild(pDay);
                divDay.appendChild(pNum);
                //divDay.append(pNum);
                div.appendChild(divDay); 
                
            }
             //checking what day it is and if the innerHTML is responding, then apply new style to show what day it is today
            if (pNum.innerHTML === currentDayDate && h2.innerHTML === currentMonth) {
                h2.className = "current-month";
                divDay.className = "current-day day";                
            };
        } //end of for loop for days
    }); //end of forEach Month loop  
}

function updateWindowSize() {
    //variable widthviewport is == to the windws width.
    widthViewPort = window.innerWidth;
}

//the resize of the window must be reported everytime it is resized, thats why i need to use onresize rather eventlistener. on resize calling the function that checks the innerWidth.
// and ligics of what will happen. 
window.onresize = updateWindowSize;
//calling the function that displays the calander
displayMonths();
