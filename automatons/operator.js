const { isSumOrSub, isDigit } = require("../util/util");
const { numberAutomaton } = require("../automatons/number");

module.exports.operatorAutomaton = (code, position) => {
  if (isSumOrSub(code[position])) {
    //+1
    if (position == 0) {
      if (isDigit(code[position + 1])) {
        return numberAutomaton(code, position);
      }
    }

    //(+1  || =+1
    if (code[position - 1] == "(" || code[position - 1] == "=") {
      if (isDigit(code[position + 1])) {
        return numberAutomaton(code, position);
      }
    }

    return {
      end: position,
      token: `<operador,${code[position]}>`,
    };
  } else {
    return {
      end: position,
      token: `<operador,${code[position]}>`,
    };
  }
};
