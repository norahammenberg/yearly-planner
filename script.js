//access the date api that is built in the web browser

//setting states that can change through out the web app use be declaring let variables. 
//Get element by ID variables:
const heading = document.getElementById("heading");
const yearContainer = document.getElementById("year-container");
const calenderCointainer = document.getElementById("calander-container");
const calenderMonths = document.getElementsByClassName("month-container");
const calanderDays = document.getElementById("calander-days");

// Date related variables:

//getting todays date
const date = new Date();

const currentYear = date.getFullYear();

//creating an array of the months so they can be displayed by name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = months[date.getMonth()];

const daysByNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const currentDayDate = daysByNumber[date.getDate() - 1];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]
const currentDayByName = days[date.getDay()];

//creating a dynamic header so year is correct:
heading.append (currentYear + " Yearly Planner");


function understand() {
    months.forEach((month, i) => {
        const weekday = new Date(currentYear, i, 1).getDay();
        const firstDayMonth = days[weekday];
        //console.log(month + weekday)
        
        /*if (weekday ===  1 && div) {
            
            console.log(month);
            const div = document.createElement("div");
            const divDay = document.createElement("div");
            divDay.className = "day empty-day";
            div.appendChild(divDay);
            calenderCointainer.appendChild(div)
        }*/
         if (firstDayMonth === "Tuesday") {
            
        }
        else if (firstDayMonth === "Wednesday") {
            
        }
        else if (firstDayMonth === "Thursday") {
            
        }
        if (firstDayMonth === "Friday") {
            
        }
        else if (firstDayMonth === "Saturday") {
            
        }
        else {
            
        }
    })
    /*if (currentMonth === "January" && daysByNumber[0] === "1") {
        console.log("Yes");
    };*/
};
//understand();

function displayMonths () {
    
    //looping through the month array, every months is saved in the month and the index of the array is saved in the i
    months.forEach((month, i) => {
        //finding out what weekday is the 1st of every month
        const weekday = new Date(currentYear, i, 1).getDay();
        const firstDayMonth = days[weekday];
        
        /*if (weekday ===  1 && div.classList) {
            
            console.log(month);
            const div = document.createElement("div");
            const divDay = document.createElement("div");
            divDay.className = "day empty-day";
            div.appendChild(divDay);
            calenderCointainer.appendChild(div)
        }*/

        //creating all relevent html to display the months:
        const div = document.createElement("div");
        div.className = "month-container";
        div.id = month;
        const h2 = document.createElement("h2");
        h2.append(month);
        div.appendChild(h2);
        calenderCointainer.appendChild(div);

        //finding the odd index numbers of the months array to be able to seperat the colours for the different months. 
        if (i % 2 === 1) {
            div.className = "month-container odd";
        };

        //Looping through the days and create there HTML elements. 
        daysByNumber.forEach(day => {
            const divDay = document.createElement("div");
            divDay.className = "day";
            const p = document.createElement("p");
            p.append(day);
            divDay.appendChild(p);
            div.appendChild(divDay);

            if (weekday ===  2 && div.id === month) {
                h2.style.paddingBottom = "39px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
            else if (weekday ===  3 && div.id === month) {
                h2.style.paddingBottom = "73px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
            else if (weekday ===  4 && div.id === month) {
                h2.style.paddingBottom = "107px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
            else if (weekday ===  5 && div.id === month) {
                h2.style.paddingBottom = "141px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
            else if (weekday ===  6 && div.id === month) {
                h2.style.paddingBottom = "175px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
            else if (weekday ===  0 && div.id === month) {
                console.log("THISTHISTHIS")
                h2.style.paddingBottom = "243px"; /*OBS OBS MAGIC NUMBER WARNING*****************************************************************/
                console.log("YOU GOT THIS" + month);
            }
                /*const emptyDiv = document.createElement("div");
                divDay.className = "day empty-day";
                emptyDiv.appendChild(divDay); 

                const divDay = document.createElement("div");
                divDay.className = "day";
                const p = document.createElement("p");
                p.append(day);
                divDay.appendChild(p);
                div.appendChild(divDay);
            }*/
  
            //checking what day it is and it the innerHTML is responding, then apply new style to show what day it is today
            if (p.innerHTML === currentDayDate && h2.innerHTML === currentMonth) {
                h2.className = "current-month";
                divDay.style.backgroundColor = "#C4C4C2";
                p.style.fontWeight = "700";
            };
        }); //end of forEach day loop
    }); //end of forEach Month loop  
}



/*function displayAllDays () {
    daysByNumber.forEach(day => {
        const div = document.createElement("div");
        div.className = "day";
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.append(day);
        ul.appendChild(li);
        div.appendChild(ul);
        //calanderDays.appendChild(div);
     });
}*/

//calling the function that displays the calander
displayMonths();