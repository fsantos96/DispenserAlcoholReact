//Codigo para comunicarse con la api
const request = require('request-promise');
const baseApi = "http://localhost:3500/";

export function setDeviceAlertsTimes(ackAlertTime, doneAlertTime) {
    var options = {
        method: 'POST',
        uri: baseApi + "device/setAlarms",
        body: {
            timeAck: ackAlertTime,
            timeCharge: doneAlertTime
        },
        json: true // Automatically stringifies the body to JSON
    };
    console.log(options)
    return new Promise((resolve, reject) => {
        request(options).then(data =>{
            resolve(data);
        }).catch(error => {
            reject();
        })
    });
}

// export function getDeviceData() {
//     return new Promise((resolve, reject) => {
//         sentRequest().then(data =>{
//             resolve(data);
//         }).catch(error => {
//             reject();
//         })
//     });
// }