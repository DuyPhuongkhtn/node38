"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAvatar = void 0;
const initAvatar = (fullName) => {
    let name = fullName.split(" ");
    let newAvatar = name[0][0] + name[2][0];
    console.log(newAvatar);
    return `https://ui-avatars.com/api/?name=${newAvatar}&background=random&size=100`;
};
exports.initAvatar = initAvatar;
//# sourceMappingURL=index.js.map