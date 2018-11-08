function takeANumber(line, name) {
  line.push(name)
  var number = line.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${number} in line`
}
