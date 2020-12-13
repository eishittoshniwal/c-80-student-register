var studentarray=[]
function submit(){
for (var x=1;x<6;x++){
    var student=document.getElementById("input"+x).value
    studentarray.push(student)   
}
    console.log(studentarray)
var displayarray=[]
for (var y=0;y<studentarray.length;y++){
displayarray.push("<h4>"+studentarray[y]+"</h4>")
}
    document.getElementById("output").innerHTML=displayarray
    var arraywithoutcommas=displayarray.join(" ")
    document.getElementById("outputwithoutcommas").innerHTML=arraywithoutcommas
   document.getElementById("submit").style.display="none"
   document.getElementById("sort").style.display="inline-block"
}
function sort(){
    studentarray.sort()
    var sortedarray=[]
    for (var z=0;z<studentarray.length;z++){
        sortedarray.push("<h4>"+studentarray[z]+"</h4>")
        }
    document.getElementById("output").innerHTML=sortedarray
    var sawc=sortedarray.join("")
    document.getElementById("outputwithoutcommas").innerHTML=sawc
}

