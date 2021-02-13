const Either = ({ condition, ifTrue, ifFalse }) =>
  Boolean(condition) ? ifTrue : ifFalse

export default Either
