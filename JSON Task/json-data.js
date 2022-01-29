// 1). JSON iterate over all for loops (for, for in, for of, forEach)
let arr=[{
    "name":"Ram",
    "batch":"B31 WD",
    "Language":"Tamil"
},
{
    "name":"Kumar",
    "batch":"B31 WE",
    "Language":"English"
}]

// for loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// for in loop - Approach 1
for(let index in arr){
    console.log("index is",index,"arr is",arr[index]);
}

// for in loop - Approach 2
for(let key in arr){
    console.log("key is",key,"value is",arr[key]);
}

// for of loop
for(let arrays of arr ){
    console.log(arrays);
}

// forEach loop
arr.forEach(function(obj){
    console.log(obj);
})

// 2). Create your own resume data in JSON format
var resumedata=[{
    "basics": {
      "name": "Ramkumar J",
      "email": "ramviru9@gmail.com",
      "phone": "+91 7708548246",
      "location": {
        "address": "139/G,Kesavalu nagar(1st street)",
        "city": "Kallakurichi(Tk & Dt)",
        "state": "Tamilnadu",
        "postalCode": "606 202"
      },
    },
    "Professional Experience":{
    "Career Objective":"Seeking a most challenging competitive environment which provides exposure new ideas that leads to build my career with excellent growth prospect",
    "Experience":"I have a 3 years of experience on Working as a Junior Engineer (Automation & LX Debugging) in Bharat FIH Limited (Foxconn) from (Oct 2018 to Nov 2021)"},
    "Graduation Details":{
        "UG":{
            "Degree":"Bachelor of Engineering",
            "Department":"Electrical and Electronics Engineering",
            "CGPA":"6.33 CGPA",
            "Year of Passing":"passed in 2018",
            "University":"Anna university – Tuticorin campus"},
        "HSC":{
            "Percentage of marks":"87.25%",
            "Year of Passing":"passed in 2014",
            "School name":"Sakthi Matric Hr. Sec. School, Kallakurichi"},
        },
    "Technical details":{
        "Design software":"Basics of Sketch-up, MATLAB, Adobe Eagle & Auto CAD",
        "Software Packages":"Microsoft Office 2019",
        "Hardware known":"Lithium-ion Battery Pack Design & Assembly/Testing for EV Vehicles, Battery Management System (BMS),Smartphone Debugging, PCBA level Analysis, Soldering",
    },
    "Career Project":{
        "Li-ion Battery Pack For AGV & AMR":"Played a Major Role on design and developing In-house Project by “Li-ion Battery Pack for Automated Guided vehicles (AGV) & Autonomous Mobile Robot (AMR)” using Nokia Mobile phone Batteries for SMT PCBA Pallet and Kitting to Line material movement at RSMIPL, TN Plant",
        "Batterpack for Self Balancing robots":"•	Made a 12V Li-ion Battery pack by using 3S BMS and Nokia Mobile Batteries for Self Balancing Robots",    
    },
    "Academic Project":"•	Done a project on Solar Based Multilevel Inverter Using Six Switches",
    "Personal Profile":{
        "Father name":"Mr.K.Jayamurugan & Mrs.J.Sumathi",
        "Data of Birth & Age":"06/06/1997 & 24 years",
        "Gender":"Male",
        "Marital status":"Unmarried",
        "Nationality":"Indian",
        "Languages Known":"Tamil and English",
    },
    "Declaration":"I hereby declare that all the above furnished information and particulars are true to the best of my knowledge",
}]
    resumedata.forEach(function(resume){
    console.log(resume);
  })
  