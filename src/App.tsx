// NPM Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Custom Modules
import { PortalPage } from 'pages/portal';

export default class App extends React.Component {
  public router = createBrowserRouter([
    {
      path: '/',
      element: <PortalPage />
    }
  ]);
  render() {
    return (
      <div className='App'>
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
