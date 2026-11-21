const selEducationLevel = document.getElementById("selEducationLevel");

const divBasicSubjects = document.getElementById("divBasicSubjects");
const divPrimarySubjects = document.getElementById("divPrimarySubjects");
const divLowerSecondarySubjects = document.getElementById("divLowerSecondarySubjects");
const divUpperSecondarySubjects = document.getElementById("divUpperSecondarySubjects");
const divHigherEducationSubjects = document.getElementById("divHigherEducationSubjects");

let intEducationLevel = 1

// Controlar display de materias por nivel educativo
function ShowLevelSubjects(){
    intEducationLevel = Number(selEducationLevel.value);
    
    if (intEducationLevel === 1){
        divBasicSubjects.style.setProperty("display","flex");
        divPrimarySubjects.style.setProperty("display","none");
        divLowerSecondarySubjects.style.setProperty("display","none");
        divUpperSecondarySubjects.style.setProperty("display","none");
        divHigherEducationSubjects.style.setProperty("display","none");
    }else if(intEducationLevel === 2){
        divBasicSubjects.style.setProperty("display","none");
        divPrimarySubjects.style.setProperty("display","flex");
        divLowerSecondarySubjects.style.setProperty("display","none");
        divUpperSecondarySubjects.style.setProperty("display","none");
        divHigherEducationSubjects.style.setProperty("display","none");
    }else if(intEducationLevel === 3){
        divBasicSubjects.style.setProperty("display","none");
        divPrimarySubjects.style.setProperty("display","none");
        divLowerSecondarySubjects.style.setProperty("display","flex");
        divUpperSecondarySubjects.style.setProperty("display","none");
        divHigherEducationSubjects.style.setProperty("display","none");
    }else if(intEducationLevel === 4){
        divBasicSubjects.style.setProperty("display","none");
        divPrimarySubjects.style.setProperty("display","none");
        divLowerSecondarySubjects.style.setProperty("display","none");
        divUpperSecondarySubjects.style.setProperty("display","flex");
        divHigherEducationSubjects.style.setProperty("display","none");
    }else if(intEducationLevel === 5){
        divBasicSubjects.style.setProperty("display","none");
        divPrimarySubjects.style.setProperty("display","none");
        divLowerSecondarySubjects.style.setProperty("display","none");
        divUpperSecondarySubjects.style.setProperty("display","none");
        divHigherEducationSubjects.style.setProperty("display","flex");
    }
}

selEducationLevel.addEventListener("change", ShowLevelSubjects);

// Mandar materias a su html definido (divididos para velocidad en hackaton)
function sendSubject(subject){
    let strEducationLevel = "";
    if (intEducationLevel === 1){
        strEducationLevel = "Basics"
    }else if(intEducationLevel === 2){
        strEducationLevel = "Primary"
    }else if(intEducationLevel === 3){
        strEducationLevel = "LowerSecondary"
    }else if(intEducationLevel === 4){
        strEducationLevel = "UpperSecondary"
    }else if(intEducationLevel === 5){
        strEducationLevel = "HigherEducation"
    }

    document.location.href = `${strEducationLevel}/index.html?subject=${subject}`
}