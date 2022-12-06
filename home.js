firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        UnBlur();
    }
})

function BlurPage() {
    let page__body = document.getElementById("body-content");
    page__body.style.filter = "blur(5px)";
}
function UnBlur() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    let page__body = document.getElementById("body-content");
    page__body.style.filter = "blur(0px)";
}
