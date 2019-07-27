const is_username_valid = (username) =>  /^[a-zA-Z][\w]{4,9}$/.test(username);

console.log(is_username_valid('Xrutaf888'));
console.log(is_username_valid('1Diana'));


const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_])(?=.*[=]).{8,}$/.test(password);

console.log(is_password_valid('passW0rd='));
console.log(is_password_valid('C0d3YourFuture!#'));