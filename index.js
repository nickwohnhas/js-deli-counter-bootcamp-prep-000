function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name)
  var index = katzDeliLine.length
  return `Welcome, ${name}. You are number ${index} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var firstperson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstperson}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  var currentstr = "The line is currently: "
  if (line.length>0){
  for (var i = 0, i<line.length,i++){
      var nameofperson = line[i]
      if (i != line.length - 1){
      currentstr.push(`${i}. ${nameofperson}`) += `, `
       
        }
        else{
          currentstr.push(`${i}. ${nameofperson}`)
        }
      }
       return currentstr
    }
  else{
    return "The line is currently empty."
  }
}  