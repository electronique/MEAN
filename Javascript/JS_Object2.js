let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

console.log("EMPLOYEES");
 let employee = users.employees;
 for (staff in employee){
     
 console.log(employee[staff].first_name+" "+employee[staff].last_name);
 }
 console.log(" ");
 console.log("MANAGERS");
 let manager = users.managers;
 for (staff in manager){
    console.log(employee[staff].first_name+" "+employee[staff].last_name);
 }