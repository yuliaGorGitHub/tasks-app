
class Task {
    constructor (taskStrOrObject, status)
    {
        if(arguments.length === 1 && typeof taskStrOrObject === 'object') 
        {
			this.task = taskStrOrObject.task;
			this.status = taskStrOrObject.status;            
        }
        else if (arguments.length === 2)
		{
			this.task = taskStrOrObject;
			this.status = status;
		}
		else 
		{
			// error
			console.log("Throw exception bad task creation");
		}
    }
}
export default Task;