import React, { useState, useEffect } from 'react';


//logo
// Coding Languages
import pythonIcon from './assets/logo/python.svg';
import reactIcon from './assets/logo/react.svg';
import javaIcon from './assets/logo/java.svg';
import cPlusPlusIcon from './assets/logo/cpp.svg';
import javascriptIcon from './assets/logo/javascript.svg';

// Tech & Tools
import githubIcon from './assets/logo/github.svg';
import databaseIcon from './assets/logo/postgresql.svg';
import awsIcon from './assets/logo/aws.svg';

// CSE Subjects
import dsaIcon from './assets/logo/dsa.svg';
import aiIcon from './assets/logo/ai_ml.svg';
import osIcon from './assets/logo/os.svg';
import architectureIcon from './assets/logo/computer_architecture.svg';

// Default / Task Related
import studyIcon from './assets/logo/study.svg';
import assignmentIcon from './assets/logo/assignment.svg';

import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AiChat from './components/AiChat';
import WelcomeBanner from './components/WelcomeBanner';
import ProgressCards from './components/ProgressCards';
import SummaryWidget from './components/SummaryWidget';

import dessertImg from './assets/dessert.svg';
import angleTopImg from './assets/angleTop.svg';
import flowersImg from './assets/flower.svg';

function App() {

  const getTaskIcon = (title) => {
    const text = title.toLowerCase();

    // Coding Languages
    if (text.includes('python')) return pythonIcon;
    if (text.includes('react')) return reactIcon;
    if (text.includes('java') && !text.includes('javascript')) return javaIcon;
    if (text.includes('c++') || text.includes('cpp')) return cPlusPlusIcon;
    if (text.includes('js') || text.includes('javascript')) return javascriptIcon;

    // Tech & Tools
    if (text.includes('git') || text.includes('github')) return githubIcon;
    if (text.includes('aws') || text.includes('cloud')) return awsIcon;

    // CSE Subjects (Perfect for your BTech coursework!)
    if (text.includes('dsa') || text.includes('algorithm')) return dsaIcon;
    if (text.includes('ai') || text.includes('machine learning')) return aiIcon;
    if (text.includes('os') || text.includes('operating system')) return osIcon;
    if (text.includes('architecture') || text.includes('coa')) return architectureIcon;
    if (text.includes('dbms') || text.includes('sql') || text.includes('database')) return databaseIcon;

    // Task / Study Related
    if (text.includes('assignment')) return assignmentIcon;
    if (text.includes('exam') || text.includes('test')) return examIcon; // Assuming you imported examIcon

    // The fallback if nothing matches
    return studyIcon;
  };

  const [tasks, setTasks] = useState([]);
  const [streak, setStreak] = useState(0);
  const [dailyQuote, setDailyQuote] = useState("Loading your daily motivation... ♡");

  // 1. Initial load: fetch tasks, calculate login streak, and fetch daily quote
  useEffect(() => {
    // A. Fetch Tasks from Python backend
    fetch('http://127.0.0.1:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks:", error));

    // B. Daily Streak Calculation via LocalStorage
    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem('sb_lastLogin');
    let currentStreak = parseInt(localStorage.getItem('sb_streak') || '0', 10);

    if (lastLogin !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastLogin === yesterday.toDateString()) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }

      localStorage.setItem('sb_lastLogin', today);
      localStorage.setItem('sb_streak', currentStreak.toString());
    }
    setStreak(currentStreak);

    // C. Fetch Daily Quote from local Gemma backend
    fetch('http://127.0.0.1:5000/quote')
      .then(res => res.json())
      .then(data => {
        if (data.quote) setDailyQuote(data.quote);
      })
      .catch(() => {
        className ="text-sb-text-main ",
        setDailyQuote('"Small steps every day lead to big results." — StudyBuddy ♡');
      });
  }, []);

  // 2. Determine if any pending task is older than 24 hours (86,400,000 ms)
  const isPlantSad = tasks.some(task =>
    !task.completed && task.createdAt && (Date.now() - task.createdAt > 86400000)
  );

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);

    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTasks)
    }).catch(error => console.error("Error saving tasks:", error));
  };

  const addTask = (newTaskTitle) => {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      xp: '+10 XP',
      icon: getTaskIcon(newTaskTitle),
      completed: false,
      createdAt: Date.now() // Timestamp recorded to track 24hr plant mood
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTasks)
    }).catch(error => console.error("Error saving tasks:", error));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);

    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTasks)
    }).catch(error => console.error("Error saving tasks:", error));
  };

  const editTask = (taskId) => {
    const newTitle = prompt("Enter new task name:");
    if (!newTitle) return;

    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);

    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTasks)
    }).catch(error => console.error("Error saving tasks:", error));
  };

  return (
    <div className="min-h-screen bg-sb-bg p-6 flex gap-6 mali-text">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <WelcomeBanner streak={streak} />

            {/* Passing streak and isPlantSad down to ProgressCards */}
            <ProgressCards tasks={tasks} streak={streak} isPlantSad={isPlantSad} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TaskList
                addTask={addTask}
                deleteTask={deleteTask}
                editTask={editTask}
                tasks={tasks}
                toggleTask={toggleTask}
              />
              <SummaryWidget tasks={tasks} />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-16">
            {/* Dynamic Quote Box */}
            <div className="bg-sb-surface/80 rounded-[32px] p-8 border border-white shadow-sm text-center flex flex-col justify-center min-h-[140px]">
              <p className="font-medium italic mb-3 text-sb-text-main leading-relaxed">
                {dailyQuote}
              </p>
            </div>

            <AiChat />

            <img
              src={dessertImg}
              alt="Dessert"
              className="relative bottom-2 left-[100px] right-1 w-80 h-80 drop-shadow-md z-50"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;