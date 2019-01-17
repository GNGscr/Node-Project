// const Promise = require("bluebird");
// const fs      = require('fs');
// const readdir = Promise.promisify(fs.readdir);
// const readFile = Promise.promisify(fs.readFile);
// const writeFile = Promise.promisify(fs.writeFile);

// // isomorphic_fetch;
// // import color_logger

// // parsing all of the files and moving it to one array

// // 


// // const final_list = [];

// // const datas;

// // fs.readdir('./LEADS',(err,files)=>{
// //     if(err)
// //         console.log('Error:',err.message);
// //     else
// //         console.log('Contents:',files);
// //         datas = files;
// //     });
    
//     // console.log(datas)

// // datas.map(item =>{
    
// // })

// // letimport { rejects } from "assert";
//  arr_of_users = [];
// let obj = {};



// // // readdir('./LEADS')
// // //  .each(file => {

// // // })
// // readdir('./LEADS')
// // .then(files => {
// //     // loop each file with some async loop
// //     return Promise.each(files, file => {
// //         // read file content
// //         return readFile(`./LEADS/${file}`, "utf-8")
// //         .then( (data, err) => {  // (content)=>{}
// //         let rows = data.split('\r\n');
// //         // console.log(lines.length)
// //         // return lines;
// //             for(let row of rows) {
// //                 let i = line.split(',');
// //                 // return i;
// //                 // let [fb_id, name, email] = 
// //                 console.log(rows)
// //             }           
// //         })
// //         // .then(() => {
// //         //     //write users_list to json file
// //         //     // p.info('users_list.length' + uesrs_list.length)
// //         //     writeFile('./users.json', JSON.stringify(uesrs_list, null, 1) );
// //         // })
// //         .catch(error => {
// //             p('ERROR: ', error.message)
            
// //         })
// //         // .then(data => {
// //         //     let lines = data.split('\r\n');
// //         //     // console.log(lines)
// //         //     return lines;
// //         // })
// //         // .then(lines => {
// //         //     arr_of_users = lines.map(line => {
// //         //         let i = line.split(',');
// //         //         return i;
// //         //     });
// //         //     return arr_of_users;
// //         // })
// //         // .then(arr_of_users => {
// //         //     obj["id"] = arr_of_users[0][0];
// //         //     obj["name"] = arr_of_users[0][1];
// //         //     obj["email"] = arr_of_users[0][2];

// //         //     return obj;
// //         // })
// //         // .then(obj => {
// //         //     console.log(obj)
// //         // })
// //         // .then(obj => {
// //         //     fs.writeFileSync('./LEADS/newFile.txt',`${obj}`)
// //         // })
// //     })
// // })


// readdir('./LEADS')
//         // loop each file with some async loop
//     .each(file_name => {
//         // read file content
//         return readFile(`./LEADS/${file_name}`, "utf-8")
//         .then((content) => {
//             let rows = content.split('\r\n')
//             for(let row of rows) {
//                 // split the lines into array of user data (strings)
//                 const [id, full_name, email] = row.split(',');
//                 const user = {id, full_name, email};

//                 if(!(user.id in obj)) {
//                     obj[user.id] = true;
//                     arr_of_users.push(user)
//                 }
//             }
//         })
//     })
//     .then(() => {
//     // write users_list to json file
//     // p.info('users_list.length' + uesrs_list.length)
//         return writeFile('./users.json', JSON.stringify(arr_of_users, null, 1) );
//     })
//     .then(()=>{
//         console.log('All Done!',arr_of_users.length)
//     })
//     .catch(error => {
//         console.error('ERROR: ', error.message)
//     })


// //              EUR GBP
//     // async function getRate(base, currency){
//     //     return new Promise(fullfil, rejects){



    
//     // }
//     // fetch


//     // async function main() {
//     //     try {
//     //         let rate = await getRate( 'EUR', 'AUD')
//     //         p.info('1 EUR')
//     //     }
//     // }

const color_logger = require('color_logger');
