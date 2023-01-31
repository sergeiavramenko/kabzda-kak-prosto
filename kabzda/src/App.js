import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header"> <img src="https://img.icons8.com/ios/1x/conference-call.png"></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>

      </nav>
      <div className="content">
        <div>
          <img src="https://images.unsplash.com/photo-1670217470538-e442d7d5ec10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />

        </div>
        <div>My post <div>new post</div>
          <div>
            <div> post1</div>
            <div> post2</div>
            <div> post3</div>
            <div> post4 </div>
          </div>
        </div>



      </div>

    </div>

  );
}

export default App;
