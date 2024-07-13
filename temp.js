let keytable = {};
let reversekeytable = {};

let vis = {};


function tablegen(min, max,curr) {
    flag=true
    while(flag){
        val=""
        flag=false;
        for(let i=0;i<4;i++){
            choice=Math.floor(Math.random() * (3 - 1 + 1)) +1
            if(choice==1){
                x=Math.floor(Math.random() * (max - min + 1)) + min;
                val+=x.toString();
            }
            if(choice==2){
                y=String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
                val+=y;
            }
            if(choice==3){
                z=String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
                val+=z;
            }


        }
        if (val in vis) {
            flag=true
            continue
        }
        vis[val]=1
        // keytable[curr]=[]
        // keytable[curr].append(val)

        // for million color format but we have to increase the length from 4 to box fit it further as it can only store generate till 9999 but we will include alphabets later to make it box fit in 4
        reversekeytable[val]=curr
        keytable[curr]=val
    }
}

// Traverse from 'a' to 'z'
for (let i = 97; i <= 122; i++) {
    // console.log(String.fromCharCode(i));
    tablegen(0, 9,String.fromCharCode(i));
}

// Traverse from 'A' to 'Z'
for (let i = 65; i <= 90; i++) {
    // console.log(String.fromCharCode(i));
    tablegen(0, 9,String.fromCharCode(i));
}
// keyValue for Space
tablegen(0, 9," ");
tablegen(0, 9,"uniquepublickey");


// // Encode the message from my keytable

// function encodefun(input){
//     msg=input.toString()

//     enc=""
//     for(let i=0;i<msg.length;i++){
//         enc+=keytable[msg[i]]
//     }
//     return enc
// }

// // Decode From My Keytable

// function decodefun(input){
//     msg=input.toString()

//     enc=""
//     for(let i=0;i<msg.length;i+=4){
//         temp=""
//         for(let j=0;j<4;j++){
//             temp+=msg[i+j]
//         }
//         enc+=reversekeytable[temp]
//     }
//     return enc
// }


// // Take Message Input and call decode and encode
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter something: ', (input) => {
//     console.log(`You entered: ${input}`);

//     msg=encodefun(input.toString())
//     console.log(msg)

//     decodedmsg=decodefun(msg)
//     console.log(decodedmsg)
//     rl.close();
// });

console.log(keytable);

// Now as we have single keytable for personal device we convert the table into qr code and share it with the nearby device and the device will convert the qr code to the table.
// both the sides can talk in secured way as they have their own chat keytable and exchange each others keytable which will be their personal language

// now we want have two device who can talk with each other but we can connect the whole world so we will use the small world network (A small-world network is a type of graph in which most nodes are not neighbors of one another, but most nodes can be reached from every other by a small number of hops.) to solve the issue

// So suppose we have x and y who connected with each other
// now there is z who connected with y using same qr code technique so what we can do is make the y a linker between x and z
// as we have assigned a uniquepublic key for each user we will share the uniquepublic key of the linker accordingly to the both users keytable which is in encrypted form so no man in middle can know the code given to both as both will be different now after both of the x and z recieves the code and decrypts it will be same and that we will insert in the autheticator function which creates a hardcoded table for communication purpose which will be same for both x and z

// Now they will communicate using this keytable and decide the keytable among themselves and then again secure themselves as y can also turn into the man in middle attacker (if the y is notified of connection he can still corrupt the process so we have to make a protective layer of information and further more we can make only two time entry in the  table)




