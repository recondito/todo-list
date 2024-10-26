import { useForm } from "react-hook-form";

const TodoForm : React.FC = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit : any = (data : any) => console.log(data);

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("task")} />
            <input type="submit" />
        </form>
    </>
  )
}

export default TodoForm;