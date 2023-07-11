var current_users = ['john', 'alice', 'bob', 'jane', 'alex'];
var new_users = ['mary', 'john', 'steve', 'ALEX', 'sam'];
var current_users_lowercase = current_users.map(function (strr) { return strr.toLowerCase(); });
var new_users_lowercase = new_users.map(function (strr) { return strr.toLowerCase(); });
for (var _i = 0, new_users_lowercase_1 = new_users_lowercase; _i < new_users_lowercase_1.length; _i++) {
    var new_user = new_users_lowercase_1[_i];
    var username_taken = current_users_lowercase.includes(new_user);
    if (username_taken) {
        console.log("Username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_user, "' is available"));
    }
}
