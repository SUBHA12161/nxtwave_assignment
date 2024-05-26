import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import TabContent from './TabContent';
import '../css/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('resources');

  return (
    <div>
      <Nav variant="tabs" className="nav-tabs-custom">
        <Nav.Item className="nav-item">
          <Nav.Link
            eventKey="resources"
            active={activeTab === 'resources'}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link
            eventKey="request"
            active={activeTab === 'request'}
            onClick={() => setActiveTab('request')}
          >
            Requests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link
            eventKey="user"
            active={activeTab === 'user'}
            onClick={() => setActiveTab('user')}
          >
            Users
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Tabs;