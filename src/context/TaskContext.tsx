import { createContext, useContext, useState, ReactNode } from "react";

interface Task {
    name: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (taskName: string) => void;
}

const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => {},
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { name: taskName }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};


export const useTaskContext = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
  };