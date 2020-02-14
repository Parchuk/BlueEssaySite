function counterInit(){
    var elem = document.querySelector(".count");
    var countPlus = document.querySelector(".plus").addEventListener("click", addСount);
    var countMinus = document.querySelector(".minus").addEventListener("click", subtractСount);

    function addСount(){

        ++elem.value;
    }
    function subtractСount(){
        if(elem.value > 1){
            --elem.value
        }
        else{
            elem.value = 1;
        }
    }
} 
    document.addEventListener("ready", counterInit());