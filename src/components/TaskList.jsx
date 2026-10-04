// We now accept { tasks, toggleTask } as props from App.jsx
import { useState } from 'react';
import bowImg from '../assets/bow.svg';


export default function TaskList({ tasks, toggleTask, addTask, deleteTask, editTask }) {
    const [isAdding, setIsAdding] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        addTask(newTaskTitle);
        setNewTaskTitle('');
        setIsAdding(false);
    };
    
    return (
        <div className="bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col min-h-[270px]">
            <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-sb-dark flex items-center gap-2">
                    <span className="text-xl">
                        <img src={bowImg} alt="Bow" className="w-6 h-6 rotate-9" />
                        
                        </span> Today's Tasks
                </h3>

                {!isAdding ? (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="bg-sb-primary text-white text-xs px-4 py-2 rounded-full font-bold shadow-sm hover:bg-sb-dark transition-colors"
                    >
                        + Add Task
                    </button>
                ) : (
                    <form onSubmit={handleAdd} className="flex gap-2">
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            placeholder="Next goal? ♡"
                            className="w-32 bg-white border border-sb-primary/20 rounded-full px-3 py-1.5 text-xs font-bold text-sb-text-main focus:outline-none focus:border-sb-primary shadow-sm"
                            autoFocus
                        />
                        <button type="submit" className="bg-sb-primary text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-sm hover:bg-sb-dark transition-colors">
                            Save
                        </button>
                    </form>
                )}
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="flex items-center gap-3 bg-sb-surface/80 p-3 rounded-2xl border border-sb-bg group hover:shadow-sm transition-all cursor-pointer"
                    >
                        <button className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${task.completed ? 'bg-sb-primary text-white' : 'border-2 border-sb-primary/30 hover:bg-sb-primary/10'
                            }`}>
                            {task.completed ? '✓' : ''}
                        </button>
                        <div className="w-8 h-8 flex items-center justify-center shrink-0">
                            <img src={task.icon} alt="Task Icon" className="w-full h-full object-contain" />
                        </div>           
                                    <span className={`text-sm font-bold flex-1 truncate ${task.completed ? 'text-sb-text-sec line-through' : 'text-sb-text-main'
                            }`}>
                            {task.title}
                        </span>
                        <span className="text-xs font-bold text-sb-primary shrink-0">{task.xp}</span>
                        
                        {/* Action Buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); editTask(task.id); }}
                            className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                            className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}