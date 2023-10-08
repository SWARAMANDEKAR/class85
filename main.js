studentarray=[];
function submit(){
    var displayarray=[];
    for(var j=1;j<=4;j++)
    {
        var studentname=document.getElementById("name_of_the_student_"+j).value;
        console.log(studentname);
        studentarray.push(studentname);
    }
    console.log(studentarray);
    var studentarraylength=studentarray.length;
    console.log(studentarraylength);
    for(var k=0;k<studentarraylength;k++)
    {
        displayarray.push("<h4> name -"+studentarray[k]+"</h4>");
        console.log(displayarray);
    }
    document.getElementById("display_name_with_commas").innerHTML=displayarray;
    var removecommas=displayarray.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
}