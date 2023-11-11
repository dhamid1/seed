// import express from 'express';


// let couplesID = [{
//     ID: '12345',
//     ready: 0,
// }, {
//     ID: '54321',
//     ready: 0,
// }]

// const app = express();
// app.use(express.json());

// app.put('/api/ready2/:ID/ready', (req, res) => {
//     const {ID} = req.params;
//     const  Ready2Go = couplesID.find(a => a.ID === ID);  
// if (ready2){
//     ready2.ready += 1;
//     res.send(`Partner ${ID} is in the Ready2Go click amount is ${ready2.ready}`);
//     } else {
//         res.send('This ready doesn\'t exist.');
//     }
// });

// app.listen(3000, () =>{
//     console.log('Server is listening on port 3000');
// });