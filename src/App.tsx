import reactLogo from './assets/react.svg'
import WhatsapIcon from "/icon.webp"
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="/" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Links</h1>
      <div className="card">
          <a href="https://impetodg.com/">
            <img src={WhatsapIcon} alt="whatsap" style={{ width: "24px", borderRadius: "5px", marginRight: "10px" }}/>
            <p>
              Link da loja <code> ÍMPETO</code> 
            </p>
          </a>
       
        <a href="https://chat.whatsapp.com/LIlJHBptl1vInLbRLDhBR6">
          <img src={WhatsapIcon} alt="whatsap" style={{ width: "24px", borderRadius: "5px", marginRight: "10px" }}/>
          <p> 
            Link do grupo do Whatsapp de <code> TBATE</code> 
          </p>
        </a>
        <a href="https://chat.whatsapp.com/LiiwRR0MOkw3UmPT9hetyq">
          <img src={WhatsapIcon} alt="whatsap" style={{ width: "24px", borderRadius: "5px", marginRight: "10px" }}/>
          <p> 
            Link do grupo do Whatsapp da <code> ÍMPETO</code> 
          </p>
        </a>
      </div>
      <p className="read-the-docs">
        Click nos links que desejar! 😄😊
      </p>
    </div>
  )
}

export default App
