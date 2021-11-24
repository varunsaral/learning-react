Learning react :

Things learned till now :

1) How to setup react enivornment :
     -> Make sure you have npm installed.
     then
     npx create-react-app my-app
     cd my-app
     npm start 

We have our first app

2) Create the reusable components :
    Component i have created till now :{ footer, header , todo , todos}

    Each component must start from capital letter ?
    use react ESX7 extension and type rfc or rfcr (for creating a function)

    Basically each component will return something and it will go to main , in turn main will inject that code to root div (which is present on index.html) and will update content dynamically .

3) For passing data from parent component to child component :

    We can send data from one place to another by passing it through a object or a single varible value.
    <code>
    <Todos todos={todos}/>
    </code>

    here we are passing the todos object which is nothing but an array for tasks , and can be used by Todos component using the props variable .

    todos has => {s.no , title , desc}

    it's been sent from app.js (which contains that object) to Todos component and then it can use it through props.todo.title and similar stuff

4) For accessing or itreating over an array :
    we use objectname.map((object)=>{
        return the object properties (title , etc)
    })

5) What are hooks ?:
    Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

    idk what that means but i learned to use "usestate" it used to update the state dynamically , we take an object or anything and save it state in usestate like 

    let [value,update] = usestate(0);

    now for updating value , update func can be used and react will fetch the most recent state.


that's it for now .
