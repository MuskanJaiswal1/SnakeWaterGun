let chances = prompt("How many chances do you want to play?");
chances = Number.parseInt(chances);
document.getElementById("play").innerHTML = "You have "+chances+ " chances \n\n\n";
console.log("YOU HAVE "+chances+" CHANCES ");

while(chances!=0){
    let user = prompt("Enter S, W or G");
    let cpuI = Math.floor(Math.random() * 3);
    let cpu = ["S", "W", "G"][cpuI];
let match = (cpu, user)=>{
  if(cpu === user){
    return "NOBODY";
  }
  else if(cpu === "S" && user==="W"){
    return "CPU";
  }
  else if(cpu === "S" && user==="G"){
    return "USER";
  }
  else if(cpu === "G" && user==="W"){
    return "USER";
  }
  else if(cpu === "G" && user==="S"){
    return "CPU";
  }
  else if(cpu === "W" && user==="S"){
    return "USER";
  }
  else if(cpu === "W" && user==="G"){
    return "CPU";
  }
}
let result = match(cpu, user);
document.write(`<div id="jstext"> CPU:${cpu} <br> User:${user} </p> <p id="winner"> The winner is: ${result.toUpperCase()} </p> <br><br><br> </div>` );
alert("CPU: "+cpu +"\n USER: "+user +"\nThe winner is: "+result);
chances-=1;
}