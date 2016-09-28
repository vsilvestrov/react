import _ from 'lodash';
import React from 'react';
import { Tab } from 'react-bootstrap';

// const tabsInstance = (
// 	<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
// 		<Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
// 		<Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
// 		<Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
// 	</Tabs>
// );




export default class Tabs extends React.Component {
	render(){
		//console.log("data:", tabsInstance);
		return (
			<div className="col-md-4">
              <div className="page-header">
                <h3>Tabs Component</h3>
              </div>
			  <div className="tab">
				  <ul className="nav nav-tabs" role="tablist">
				    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
				    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
				    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
				    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
				  </ul>

				  <div className="tab-content">
				    <div role="tabpanel" className="tab-pane active" id="home">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint nemo a, culpa, quia maiores dolorem maxime libero unde, minima explicabo, omnis possimus tempore dolor? Iste doloremque amet similique velit.</div>
				    <div role="tabpanel" className="tab-pane" id="profile">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint nemo a, culpa, quia maiores dolorem maxime libero unde, minima explicabo, omnis possimus tempore dolor? Iste doloremque amet similique velit.</div>
				    <div role="tabpanel" className="tab-pane" id="messages">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint nemo a, culpa, quia maiores dolorem maxime libero unde, minima explicabo, omnis possimus tempore dolor? Iste doloremque amet similique velit.</div>
				    <div role="tabpanel" className="tab-pane" id="settings">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint nemo a, culpa, quia maiores dolorem maxime libero unde, minima explicabo, omnis possimus tempore dolor? Iste doloremque amet similique velit.</div>
				  </div>
			  </div>
			</div>
		);
	}
}