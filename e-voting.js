// let id = 1
const votes = new Set();
const getVotes = (id) =>{
    if(votes.has(id)){
        console.log("can't vote more than once");
    }else{
        votes.add(id);
        console.log(votes);
    }
}

getVotes(1),
getVotes(2),
getVotes(3),
getVotes(1),
getVotes(5),
getVotes(7)


// let allUsers = []
// const userSignup = (firstName, lastName, email, password) => {
//     if(firstName=='' || lastName=='' || email=='' || password=='') {
//         console.log('failure');
//     } else {
//         const user = {firstName, lastName, email, password}
//         console.log(user);
//         const found = allUsers.find(student=>student.email === user.email)
//         if(!found) {
//             allUsers.push(user)
//             console.log(allUsers);
//         } else {
//             console.log('user already exists');
            
//         }
        
//     }
// }

// userSignup('Anthonia', 'Adeoye', 'adeo@gmail.com', 'adeo')
// userSignup('Anthonia', 'Adeoye', 'adeoy@gmail.com', 'adeo')