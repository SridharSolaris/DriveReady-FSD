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

for(var i=0;i<trainees.length;i++) {
    for(key in trainees[i])
    {
        document.write((i+1)+" "+trainees[i][key]+" ");
    }
    document.write("<br>");
}