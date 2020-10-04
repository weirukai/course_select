import {Message} from "element-ui";
// import {MessageBox} from "element-ui";

export const messages = function (type, message) {
    Message({
        type: type,
        message: message
    });
};

// export const messageBox=function () {
//     MessageBox()
//
// }