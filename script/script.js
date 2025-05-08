//the alert function will add a pop up with a message
//alert("hello world!");

console.log("hello world! ...quickly");

//tell the first paragraph to listen for a click
document.getElementById("p1").addEventListener("click", function(){
    //console.log("click");
    //change the text in second paragraph
    document.getElementById("p2").textContent = "You clicked the first paragraph";
});