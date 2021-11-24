
import './App.css';
import Header from './MyComponents/Header'
import Todo from './MyComponents/Todo'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
function App() {
  const ondelete = ()=>{
    console.log("deleted")
  }
  let todos = [{
    sno:1,
    title:"Go to market",
    desc:"Just go to the market"
  },
  {
    sno:2,
    title:"Feed tiger",
    desc:"Cause he's hungry"
  },
  {
    sno:3,
    title:"Pick up mom",
    desc:"she's waiting for me"
  },
]
  return (
    
    <>
    <Header name = "varun"/>
    <Todos todos={todos} ondelete = {ondelete}/>
    <Todo/>
  <Footer/>
   </>
  );
}

export default App;
