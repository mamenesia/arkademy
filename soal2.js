const is_username_valid = (username) =>  /^[a-zA-Z][\w]{4,9}$/.test(username);

console.log(is_username_valid('Xrutaf888'));
console.log(is_username_valid('1Diana'));
