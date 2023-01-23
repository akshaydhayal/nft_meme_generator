import './App.css';
import axios from 'axios';

function App() {

const url = "https://api.helius.xyz/v0/addresses/CtoUM5HKxAmLUTCCuYyHftrq7jT6oHpTN9yaDGUuhp3d/nfts?api-key=f2d4e996-c072-4fd8-9e62-a4f9a7540d58"
const getNftDetails= async () => {
  const { data } = await axios.get(url)
  console.log("parsed transactions: ", data)
}
getNftDetails()

  return (
    <div className="App">
      <h1>Hello</h1>
          </div>
  );
}

export default App;
