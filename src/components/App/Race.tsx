// /// <reference path="../../modules.d.ts" />
// import * as React from 'react';
// import { Container, Divider  } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
// import 'react-promise';
// import { Arrays } from './Arrays';
// import dataJson from '/team.json';
// import 'rxjs/add/operator/map';

// interface Racer{
//     color: string;
//     avatar_url: string;
    
// }
// const uniqueArray: Array<number> = [];
// const y = [];
// while(uniqueArray.length < 5){
//     const unique = Math.floor(Math.random() * 30) + 1;
//     if(uniqueArray.indexOf(unique) > -1) {
//         continue;
//     }
//     uniqueArray.push(unique);
// }
// const prom = new Promise( (resolve, reject) =>{
//     setTimeout(() =>{
//       resolve(dataJson);
//       reject(Error);
//     }, 100)
// })
// export class Race extends React.Component { 
//     constructor(props){
//         super(props);
//         this.state = {
//             Arrays: [],
//             nextRacers: [],
//         }
//         prom.then((value) => {
//             this.setState({Arrays: dataJson.map(({ id, login }) => ({ key: id, value: login, text: login }))})
//         })
//     }
//     handleChange = (e, { key, value: number }) => {
//         const x = dataJson.map(({login, id})=>({key:id, value: login}))
//         console.log(dataJson);
//         const index: number = x.findIndex(m => m.value === value); 
//         y.push(index);
       
//         this.setState({ key, value });
//         this.state.nextRacers.push({value});
//     }
//     render() {
//         const {value}  = this.state;

//         if(this.props.startRandom) { 
//              const colors = ["F3D700", "#B513EC", "#FE8A76", "#008280", "#0E5EB8" ];
//             return (
//                 <div className="App-field">
//                 {dataJson.map((racer: Racer, index: number)=> (
//                     <Arrays avatar={dataJson.avatar_url} color={colors[index]} />
//                 ))}   
//                 </div>
//             );
//         } else  if(this.props.start) {
//             const colors = ["F3D700", "#B513EC", "#FE8A76", "#008280", "#0E5EB8" ];
//             return (
//                 <div className="App-field">
//                 {dataJson.map((racer, index)=> (
//                     <Arrays avatar={dataJson[racer].avatar_url} color={colors[index]} />
//                 ))}   
//                 </div>
//             );     
//         }else{ 
//             const nextLine = this.state.nextRacers;
//             const lineup = nextLine.map((list) => 
//                 <li className="Race-racers">
//                     <div className="ui list">
//                         <div className="item">
//                         <div className="content">
//                             {list.value}
//                         </div>
//                         </div>
//                     </div>
//                 </li>
//             );
//             return (
//                 <div>
//                     <Divider />
//                     <div className="App-container">
//                         <div className="App-dropdown">
//                             <Container>
                                
//                             </Container>
//                         </div>
                        
//                         <div className="App-Arrays">
//                             <ul>{lineup}</ul>
//                         </div>   
//                     </div> 
//                 </div>  
//             );
//         }
//     }
// }