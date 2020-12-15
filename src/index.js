import React,{ useContext, useReducer} from "react"
import ReactDOM from "react-dom"


console.log("ok!")

const DemoContext = React.createContext(null)

function Demo() {
	const {state,dispatch} = useContext(DemoContext)

	function demoCmd() {
		dispatch({
			type:"demo",
			payload:{
	
			}
		})
	}

	
	return(
		<div>
			<p>ciao {state}</p>
			<button onClick={()=>{
			demoCmd()
			
			}}>TEST</button>
		</div>
	)
}

function demoReducer(state,action) {
	switch (action.type) {
		case "demo":
			return [...state,"prova"]
			break;
	
		default:
			return state
	}
}

function  App() {
	const [state,dispatch] = useReducer(demoReducer,[])
	
	
	return (
		<DemoContext.Provider value={{state,dispatch}}>
		<div className="app">
			<h1>titolo</h1>
			<Demo/>
			{state}
		</div>
		</DemoContext.Provider>
	)
}

var rootNode = document.getElementById("app")
ReactDOM.render(<App/>,rootNode)