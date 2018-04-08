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
  var counter = 0
  if (line.length>0){
      counter++
      
      while (counter<line.length){
        var name = line[counter]
        
        currentstr += `${counter}. ${name}, `
      }
  
    return currentstr
  }
  
  else{
    return "The line is currently empty."
  
    }
}