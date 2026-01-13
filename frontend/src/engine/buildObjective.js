import tasks from "../config/tasks";

function buildObjective(taskId) {
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return "Complete the task to the best of your ability.";
  }

  return task.objective;
}

export default buildObjective;
