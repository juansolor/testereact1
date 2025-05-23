 //PascalCasing

 function Message() {
    const name = 'World'; //Variable declaration     
    return (
    //JSX: JavaScript XML
        <div>
         <><h1>Hello {name}</h1>
         <p>This is a message component.</p></>
         
        </div>
    
   );}

   export default Message;
    //Exporting the component so it can be used in other files.
