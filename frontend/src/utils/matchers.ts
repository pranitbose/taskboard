const Regex = {
  containsUppercase: /[A-Z]/,
  containsLowercase: /[a-z]/,
  containsDigit: /\d/,
  containsSpecialCharacter: /[!@#$%^&*]/,
  name: /^\p{L}+(?:[ '-]\p{L}+)*$/u,
  noWhitespace: /^\S*$/
} as const;

const Matchers = {
  containsUppercase: (value: string) => Regex.containsUppercase.test(value),
  containsLowercase: (value: string) => Regex.containsLowercase.test(value),
  containsDigit: (value: string) => Regex.containsDigit.test(value),
  containsSpecialCharacter: (value: string) =>
    Regex.containsSpecialCharacter.test(value)
} as const;

export { Matchers, Regex };
