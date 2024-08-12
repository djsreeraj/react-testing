import {
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <h1>Welcome to React testing</h1>
        <br/>
     <br/>

     <nav>
          <ul>
            <li>
              <Link to={`contact`}>ContactPage</Link>
            </li>
            <li>
              <Link to={`/`}>About</Link>
            </li>
          </ul>
      </nav>
     <br/>
     <br/>

     <h2>Sample Testing...</h2>

     <input type='text' 
      placeholder="Enter username" 
      name="userName" 
      id="userId" 
    />

     <br/>
     <br/>
     <br/>
     <br/>
     <p>Photo by Freepik</p>
     <img title="AI generated image" src="https://fps.cdnpk.net/images/ai/tti/textures-realism.webp"/>

    </div>
  );
}

export default App;
