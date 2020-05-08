/* 

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
  // if less than 10 characters
  // and more than 14 chracters then return false

  // remove greater or less than initially
  if (str.length > 16 || str.length < 10) return false;

  // this will capture digits globally or bracket and three digits or hyphen or spaces
  // falsifies strs with other characters then these
  const onlyDigitsSpacesHyphens = /\d|\(\d{3}\)|-|\s/g;
  if (str.match(onlyDigitsSpacesHyphens).join('') !== str) return false;

  // if not a left parens or a number at the start return false
  const firstCharTest = /^[\(|\d]/;
  if (!firstCharTest.test(str)) return false;

  // think i can format to reduced form now
  // can remove the parens hypens and spaces
  // check to see if more than 11 chars
  // first have to check if theres a hyphen right after the right parens

  // now i can format
  if (str.includes(')')) {
    if (str[str.indexOf(')') + 1] === '-') return false;
  }

  const parensHyphensDigitsMatcher = /\(|\)|\s|-/g;

  const formatted = str.replace(parensHyphensDigitsMatcher, '');
  console.log(formatted, formatted.length);
  if (formatted.length > 11 || formatted.length < 10) return false;

  // if length 11
  if (formatted.length === 11) {
    if (formatted[0] !== '1') return false;
  }
  return true;
}
