import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Tabs from './components/Tabs';
import AddResource from './components/AddResource';

function App() {
  const [showAddResource, setShowAddResource] = useState(false);
  const [lastActiveTab, setLastActiveTab] = useState(null);

  const handleAddItemClick = (lastActiveTab) => {
    setShowAddResource(true);
    setLastActiveTab(lastActiveTab);
  };

  const goBackToPreviousTab = () => {
    setShowAddResource(false);
  };

  return (
    <div className="App">
      <Navbar onAddItemClick={handleAddItemClick} />
      <div className="container">
        <div className="row justify-content-center">
          {showAddResource ?
            <AddResource lastActiveTab={lastActiveTab} goBackToPreviousTab={goBackToPreviousTab} />
            :
            <div className="col-md-8"><Tabs /></div>}
        </div>
      </div>
    </div>
  );
}

export default App;