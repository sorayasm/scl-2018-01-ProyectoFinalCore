function visibilityFirst() {
    document.getElementById("formPersonal").style.display = "none";
    document.getElementById("formPersonal2").style.display = "none";
    document.getElementById("formPersonal3").style.display = "none";
    document.getElementById("formPatente").style.display = "none";
    document.getElementById("formCompany").style.display = "block";
    document.getElementById("firstButton").style.display = "none";
    document.getElementById("secondButton").style.display = "block";
    document.getElementById("firstButtonBack").style.display = "block";
}
function visibilitySecond() {
    document.getElementById("formCompany").style.display = "none";
    document.getElementById("formMotive").style.display = "block";
    document.getElementById("formTime").style.display = "block";
    document.getElementById("formNameResident").style.display = "block";
    document.getElementById("secondButton").style.display = "none";
    document.getElementById("thirdButton").style.display = "block";
    document.getElementById("firstButtonBack").style.display = "none";
    document.getElementById("secondButtonBack").style.display = "block";
}
function visibilityThird() {
    document.getElementById("formCamera").style.display = "block";
    document.getElementById("secondButtonBack").style.display = "none";
    document.getElementById("thirdButtonBack").style.display = "block"
    document.getElementById("thirdButton").style.display = "none";
    document.getElementById("formMotive").style.display = "none";
    document.getElementById("formTime").style.display = "none";
    document.getElementById("formNameResident").style.display = "none";
    document.getElementById("formFinishButton").style.display = "block";
    document.getElementById("ButtonBack").style.display = "block";
}
function firstBack(){
    document.getElementById("formPersonal").style.display = "block";
    document.getElementById("formPersonal2").style.display = "block";
    document.getElementById("formPersonal3").style.display = "block";
    document.getElementById("formPatente").style.display = "block";
    document.getElementById("formCompany").style.display = "none";
    document.getElementById("firstButton").style.display = "block";
    document.getElementById("secondButton").style.display = "none";
    document.getElementById("firstButtonBack").style.display = "none";
    document.getElementById("thirdButtonBack").style.display = "none";
    document.getElementById("formCamera").style.display = "none";
    document.getElementById("formFinishButton").style.display = "none";
}
function secondBack(){
    document.getElementById("formCompany").style.display = "block";
    document.getElementById("firstButton").style.display = "none";
    document.getElementById("secondButton").style.display = "block";
    document.getElementById("firstButtonBack").style.display = "block";
    document.getElementById("formMotive").style.display = "none";
    document.getElementById("formTime").style.display = "none";
    document.getElementById("secondButtonBack").style.display = "none";
    document.getElementById("formNameResident").style.display = "none";
    document.getElementById("thirdButton").style.display = "none";
    document.getElementById("thirdButtonBack").style.display = "none";
    document.getElementById("formCamera").style.display = "none";
    document.getElementById("formFinishButton").style.display = "none";

}
function thirdBack(){
    document.getElementById("thirdButtonBack").style.display = "none";
    document.getElementById("secondButtonBack").style.display = "block";
    document.getElementById("formCamera").style.display = "none";
    document.getElementById("formFinishButton").style.display = "none";
    document.getElementById("formNameResident").style.display = "block";
    document.getElementById("formMotive").style.display = "block";
    document.getElementById("formTime").style.display = "block";
    document.getElementById("thirdButton").style.display = "block";

}