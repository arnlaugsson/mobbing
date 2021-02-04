function evil(fn) {
  const val = new Function("return " + fn)();
  return val;
}

module.exports = evil;
