import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
}

interface Task {
  name: string;
}

const TodoForm : React.FC = () => {

    const { register, handleSubmit, reset } = useForm<FormValues>();
    const [Tasks, setTasks] = useState<Task[]>([])
    const onSubmit : SubmitHandler<FormValues> = (data : any) => {
      setTasks([...Tasks, {name: data.name}]);
      reset();
    }

    console.log(Tasks);

  return (

    <>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input 
              {...register("name", {
                required: true,
              })} 
              placeholder="Task Name"
            />

            <input type="submit" />

        </form>
    </>

  )
}

export default TodoForm;