const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Adjust the length as per your requirements
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  return password;
}

const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);
