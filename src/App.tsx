import {format} from "date-fns";

function App() {
  

  return (
    <div>
      <h1>Welcome to Naglis Paunksnis website. </h1>
      <h2>Where he is, the date is {format(new Date(), "do MMMM yyyy")}</h2>
     
    </div>
  )
}

export default App
