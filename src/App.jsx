
import './App.css'
import Grandpa from './components/ContextAPI/Grandpa/Grandpa';
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/Form/HookForm'
// import StatefulForm from './components/Form/StatefulForm'
// import Form from './components/Form/Form'

function App() {
  const getData = data => {
    console.log(data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Form></Form> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <HookForm></HookForm> */}

      <ReusableForm 
        formTitle={'Sign Up Form'} 
        getData={getData}>
          <div>
            <h2>Please Sign Up the form</h2>
          </div>
      </ReusableForm>

      <ReusableForm 
        submitBtnText={'Update'} 
        getData={getData}>
          <div>
            <h2>Always update your profile</h2>
          </div>
      </ReusableForm>


      <Grandpa></Grandpa>
    </>
  )
}

export default App
