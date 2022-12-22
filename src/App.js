import './App.css';

function App(props) {
  // code here
  return (<div id='app'>
    {/* <h1>Kalvium Gallery</h1> */}
    <img className='img' src={props.data[0].img} alt="" />
    <img className='img' src={props.data[0].img} alt="" />
    <img className='img' src={props.data[0].img} alt="" />
    <img className='img' src={props.data[0].img} alt="" />
    </div>)
  
}

export default App;
