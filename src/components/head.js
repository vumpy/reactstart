import '../css/header.css';


function header() {
  return (
    <div className="header">  
        <img className = "logo" src="https://www.telmico.ge/images/front/telmico_ge.svg"></img>
        <h2>Telmico</h2>

        <ol>
          <li><a href = "https://www.telmico.ge/">About Company</a></li>
          <li><a href = "https://www.telmico.ge/">News</a></li>
          <li><a href = "https://www.telmico.ge/">Schedules Outages</a></li>
          <li><a href = "https://www.telmico.ge/">Contracts</a></li>
        </ol>
    </div>
  );
}

export default header;
