function takeANumber(line, name) {
  line.push(name)
  var number = line.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${number} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    current = katzDeliLine[0]
    katzDeliLine.slice(1)
    return current
  }else {
    return "There is nobody waiting to be served!"
  }

}
