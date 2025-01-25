import Swal from "sweetalert2"



export const sweetError=(err)=>{
    Swal.fire({
        icon:"error",
        title:"Oopsies....",
        text:err
    })
}

export const sweetSuccess=(msg)=>{
    const admiration = [
        "Amazing job!", 
        "Well done!", 
        "You're awesome!", 
        "Fantastic!", 
        "Impressive!", 
        "Nice work!", 
        "You're killing it!", 
        "Keep it up!", 
        "Excellent work!", 
        "You're on fire!",
        "That's the spirit!",
        "Superb!",
        "Way to go!", 
        "Top-notch work!",
        "Great effort!",
        "Proud of you!",
        "You're a rockstar!",
        "Perfection!", 
        "Absolutely brilliant!",
        "You're doing great!"
      ];
      
    const random=(Math.floor(Math.random()*admiration.length));
    console.log(random)
    Swal.fire({
        icon:"success",
        title:admiration[random],
        text:msg
    })
}