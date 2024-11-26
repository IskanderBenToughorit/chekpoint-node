const generatePassword = require('generate-password');

// Générer un mot de passe
const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true
});

console.log('Generated password:', password);
