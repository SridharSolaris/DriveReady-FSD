//declaring variable and initializing
var a = 'Sridhar';

//printing length of the variable
document.write(a.length);

//executing html tags
document.write("<br>");

//concatenating strings
a+='Solaris';

document.write(a.length+"<br>");

//undefined variable
var b;
document.write(b+"<br>");

//type of variable
document.write(typeof(a));


//printing to console
b=3;
console.log(b);

//pop up window alert
var s='Manikanta is Curious Seeker';
// alert(s);

//boolean
var gender=true;
document.write(gender);
document.write(typeof(gender)+"<br>");

//array
var arr=['Sridhar','Mani','Charan'];
document.write(arr+"<br>");
document.write(arr[0],arr[1],arr[2]+"<br>");

//objects
var trainees = [{
    'name': 'sridhar',
    'roll_no': 'I2',
    'college': 'AEC',
    'branch' : 'CSE',
    'email' : 'sridhar@gmail.com'
},
{
    'name': 'Mani',
    'roll_no': 'J0',
    'college': 'AEC',
    'branch' : 'CSE',
    'email' : 'main@gmail.com'
},
{
    'name': 'Surya',
    'roll_no': 'B2',
    'college': 'AEC',
    'branch' : 'CSE',
    'email' : 'surya@gmail.com'
},
{
    'name': 'Shyam',
    'roll_no': 'I9',
    'college': 'AEC',
    'branch' : 'CSE',
    'email' : 'shyam@gmail.com'
},
{
    'name': 'Charan',
    'roll_no': '143',
    'college': 'AEC',
    'branch' : 'CSE',
    'email' : 'charan@gmail.com'
}];


//printing objects key values
for(let i = 0; i < trainees.length; i++) {
    document.writeln((i+1)+". "+trainees[i].name+" "+trainees[i].roll_no+" "+trainees[i].college+" "+trainees[i].branch+"<br>");
}
document.write(Direct+"<br><br>");
//printing objects key values
for(key in trainees) {
    document.write(trainees[key]);
}