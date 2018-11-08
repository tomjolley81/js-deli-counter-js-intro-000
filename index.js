function takeANumber(line, name) {
  line.push(name)
  number = line.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${number} in line`
}