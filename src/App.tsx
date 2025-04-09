import React from 'react';
// You can use one of these methods to import Bootstrap:
// Method 1: If you installed Bootstrap as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container my-5">
      <h1>Skunkworks Capability Portfolio</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Capabilities</h5>
              <p className="card-text">
                Showcasing innovative projects and advanced capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
