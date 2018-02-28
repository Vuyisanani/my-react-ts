import * as React from 'react';
import './App.css';
import Progress from 'react-progressbar';

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
                     <Progress className="App-progress"/>
                 </div>
				 <div className="App-lane">
                     <Progress className="App-progress"/>
                 </div>
				 <div className="App-lane">
                     <Progress className="App-progress"/>
                 </div>
			</div>
			
		);
	}
}