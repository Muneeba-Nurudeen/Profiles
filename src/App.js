import Writers from './Writers';

function App() {
  return(
    <div>
    <h1> Writers Profile</h1>
    <div className="container">
    
    {
      Writers.map((Writer)=>(
        <div key={Writer.id} className="card">
        <img src={`images/${Writer.avatar}.png` }
        height = '300px'
        width = '300px' alt={Writer.img}
        />
        <div className="textGroup">
        <h3>{Writer.name}</h3>
        <p>{Writer.email}</p>
        <p>Writer.phone</p>
        </div>
        
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default App

