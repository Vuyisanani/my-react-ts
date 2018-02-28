/// <reference path="../../modules.d.ts" />
import * as React from 'react';
import './App.css';
import Progress from 'react-progressbar';
// import dataJson from '/team.json';

interface Props {
	samplePropProp?: string;

}
interface State {
	sampleStateProp?: string;
}

export class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<div className="App" >
				<header className="App-header" >
					<img src={require('../../images/logo.svg')} className="App-logo" alt="logo" />
					<h1 className="App-title" > Welcome to React with Typescript </h1>
					<h2 className="App-sub-title" > Typescript Project </h2>
				</header>
				<p className="App-intro" >
					 <code> The Horse Race Challenge </code> 
				</p>
				<div className="App-lane">
					<img src="https://avatars2.githubusercontent.com/u/1482046?v=4" height="50"/><br/>

                     <Progress className="App-progress"/>
                 </div>
				 <div className="App-lane">
                     <Progress className="App-progress"/>
					 <img src="https://avatars0.githubusercontent.com/u/1819122?v=4" height="50"/><br/>
                 </div>
				 <div className="App-lane">
                     <Progress className="App-progress"/>
					 <img src="https://avatars2.githubusercontent.com/u/2323810?v=4" height="50"/><br/>
                 </div>
				 <div className="App-lane">
                     <Progress className="App-progress"/>
					 <img src="https://avatars3.githubusercontent.com/u/2363662?v=4" height="50"/><br/>
                 </div>

			</div>
			
		);
	}
}