// Show profile picture after 10 seconds
setTimeout(() => {
      document.getElementById("profile-pic").style.display = "block";
    }, 10000);
    // Display today's date (formatted) in element with id="date"
    document.getElementById("date").innerText = new Date().toLocaleDateString(); 
 
 
 
 window.onload = function () {
  displayTable(dataSet);
  document.getElementById("date").innerText = new Date().getFullYear();
};


// Function to convert marks to grades
function markToGrade() {
      const input =  document.getElementById("mark-input").value;
      const message = document.getElementById("validation-message");
      const output= document.getElementById("grade-output");

      const mark = parseInt(input);


      if   (isNaN(mark)) {
        message.textContent ="Please enter a numeric value.";
        output.textContent ="";
      } else if (mark < 0) {
        message.textContent ="Mark cannot be negative.";
        output.textContent = "";
    } else if (mark > 100) {
        message.textContent = "Mark cannot be more than 100.";
        output.textContent = "";
      }  else {
        message.textContent = "";
        let grade = '';

          // Grade boundaries
        if (mark >= 90) grade = 'A';
         else if (mark >= 80) grade = 'B';
        else if (mark >=  70) grade= 'C';
        else if (mark >=60) grade = 'D';
        else if (mark >= 50) grade = 'E';
       else grade = 'F';

          output.textContent  = `Your grade is: ${grade}`;
      }
    }


   


const dataSet = [   
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
  [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
  [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
  [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
  [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
  [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
  [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
  [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
  [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
  [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
  [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
  [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
  [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
  [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
  [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
  [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
  [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
  [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
  [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
  [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
  [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
  [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
  [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
  [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
  [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
  [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
  [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
  [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
  [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

// Function to display the staff table
function  displayTable(data)
 {
   const table =document.getElementById( "staff-table");
    // Add header row
  table.innerHTML  = " <tr><th>Name</th><th>Position</th><th>Location</th><th>ID</th><th>Date</th><th>Salary</th></tr>";


  // Add all rows from dataset
  data.forEach(row => {
      let tr = "<tr>";
    row.forEach(cell=>  {
      tr +=`<td>${cell}</td>` ;
    });
    tr +=  "</tr>";
    table.innerHTML += tr;
      });
}

// Sort the staff table alphabetically by Name
function sortByName() {
   const sorted =  [...dataSet].sort((a, b) =>a[0].localeCompare(b[0]) );
  displayTable(sorted);
}

// Sort the staff table by Salary (high to low)
function sortBySalary() {
const sorted = [...dataSet].sort((a, b) => {
    const salA =  parseInt(a[5].replace(/[$,]/g,"" ));
    const salB =parseInt( b[5].replace(/[$,]/g,""));
    return salB - salA; 

  });
  
  displayTable(sorted);
}



//Function to display temprature 
 function convertTemp() {
      const value =  parseFloat(document.getElementById("temp-input").value);
      const unit = document.getElementById("unit").value;
      if(isNaN(value)) return;

      let c,f,k;

      if (unit ===  "C") {
        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;
      } 
      else if  (unit === "F") {
        f = value;
         c = (value -32) * 5/9;
        k = c + 273.15;
      }
       else{
         k  = value;
        c = value - 273.15;
        f = (c * 9/5) + 32;
      }
         document.getElementById("output").innerHTML=
        `Celsius: ${c.toFixed(2)}°C<br>Fahrenheit:   ${f.toFixed(2)} °F<br>Kelvin:${k.toFixed(2)}K` ;

    }
    

     


   