function total(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("math").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("chem").value);
    let sub5 = parseInt(document.getElementById("comp").value);

    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "Total Marks:" +total
    }
}

function Average(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("math").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("chem").value);
    let sub5 = parseInt(document.getElementById("comp").value);

    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let avg = total/5;
        document.getElementById("average").innerHTML="Your Average marks are:" +avg
    }
}

function grade(){
    let sub1 = parseInt(document.getElementById("eng").value);
    let sub2 = parseInt(document.getElementById("math").value);
    let sub3 = parseInt(document.getElementById("phy").value);
    let sub4 = parseInt(document.getElementById("chem").value);
    let sub5 = parseInt(document.getElementById("comp").value);

    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let avg = total/5;

        if(avg>=90 && avg<=100){
            document.getElementById("grade").innerHTML="You Got A Grade"
        }
        else if (avg>=80 && avg >=89){
            document.getElementById("grade").innerHTML="You Got B Grade"
        }
        else if (avg>=70 && avg >=79){
            document.getElementById("grade").innerHTML="You Got C Grade"
        }
        else if (avg>=60 && avg >=69){
            document.getElementById("grade").innerHTML="You Got D Grade"
        }
        else if (avg>=59){
            document.getElementById("grade").innerHTML="You Got F Grade"
        }
        }
}