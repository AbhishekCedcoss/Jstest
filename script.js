function decode(){
    var input= document.getElementById("input").value
    // console.log(input);
    // console.log("a".charCodeAt(0));
    for (var i = 0; i < input.length; i++) {
        console.log(input.charCodeAt(i)-1)
        console.log(String.fromCharCode((input.charCodeAt(i)-1)));
      }
      

    
    
        
    
}