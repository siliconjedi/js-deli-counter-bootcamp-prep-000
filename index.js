function takeANumber (katzDeliLine, newCust){
  katzDeliLine.push (newCust);
  return `Welcome, ${newCust}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served."
  } else {
    let front = katzDeliLine.shift();
    return `Currently serving ${front}`;
  }
}