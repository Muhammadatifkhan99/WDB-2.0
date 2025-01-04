const bcrypt = require("bcrypt");


// const hashPasswords = async (pw) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPasswords = async (pw) => {
    // const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw,15);
    // console.log(salt);
    console.log(hash);
}

// hashPasswords("monkey");

const login = async (pw,hashedpw) => {
    const result = await bcrypt.compare(pw,hashedpw);
    if(result){
        console.log("LOGGED YOU IN, SUCCESSFUL MATCH");
    } else {
        console.log("INCORRECT");
    }
}

login("monkey","$2b$15$FCxqpzej6Qco.1WEVWLWR.7GK73WE9SSidCuPAZCzC1bVEt40.6Ui");