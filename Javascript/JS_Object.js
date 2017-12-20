
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let student in students){
    // when we log 'topping', we notice it's a key
    console.log("Student: " + students[student].name+ "  Cohort: "+ students[student].cohort);
    // when we pass the key to the 'sandwich' object, we can pull values
}