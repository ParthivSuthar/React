- React is free and open source javascript library which is used to build user interfaces based on components.
- Components are building blocks of react which can be managed and reusable.
- To create React Projects, there are 2 ways which is learnt is 1) create-react-app (CRA Template) and 2) Using bundlers like Vite.
- 1) CRA way - npx create-react-app projectname where npx is Node Package Execute.
  2) Vite - npm create vite@latest there after you have to select framwork and enter project name.
- JSX stands JavascriptXML which allow to write HTML in Javascript.
- In JSX, React Fragment allow you to group multiple elements without adding extra node to DOM. Use empty fragments <></>.
-    
<img width="323" alt="Screenshot 2024-06-26 141453" src="https://github.com/ParthivSuthar/React/assets/143894333/f552867a-429a-4453-b5dd-924a445b7aa3">



** Best Practices
- File name and Component should be start with Uppercase.
- If file return html elements then file name in .jsx otherwise for simple functions you can name with .js.
**
------------------------------------------------------------------------------------------------------------------------

- To access variable in JSX use {} which is known as "Evaluated Expression".
- Example :
- import Name from './Name';

function App() {
  const name = "Rahul"

  return (
    <>
    <Name/>
    <h1>Hello {name}</h1>
    <p>I am fine</p>
    </>
  )
}

export default App;
---------------------------

- HOOKS are reusable functions. and it allow to use React Features and to use state without writing class.
- It is introduced in React 16.8.
- However, you cannot use hooks directly in class components.
---------------------------------------








    
