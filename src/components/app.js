console.log("app.js");
import React from 'react'; // set up the first react component
import { Tab } from 'react-bootstrap';
import Tabs from './tabs';
import Forms from './forms';
import Progressbar from './progressbar';

const tabsInstance = (
	<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		<Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
		<Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
		<Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
	</Tabs>
);

var author = {name: 'Garry', surname: 'Potter'};

//The export is used to export functions, objects etc. Default exports (only one per script):
export default class App extends React.Component {

	render(){
		return (
			<div>
				<h1>Tabs, Forms and Progressbar</h1>
				<Tabs data={tabsInstance} />
				<Forms />
				<Progressbar />
			</div>
			)
	}
}