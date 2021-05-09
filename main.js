var album=["mom.jfif","mom2.jfif","mom3.jfif","mummy2.jfif"];
var i=0;
function next(){
document.getElementById("img").src=album[i];
i++;
    if(i==4){
        i=0;
    }
    document.getElementById("audio").play();

}
