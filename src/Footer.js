function Footer({ tasks }) {
  const numTasks = tasks.length;
  const numDone = tasks.filter((t) => t.isDone).length;
  const percentage = Math.round((numDone / numTasks) * 100);
  if (!tasks.length)
    return (
      <p className="stats">
        <em>Start adding some tasks to your List 🧑‍🏫</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Construction you did good Job for Today 👌"
          : `You Have ${numTasks} Tasks on your List, and you already did  ${numDone} ( ${percentage}%)`}
      </em>
    </footer>
  );
}
export default Footer;
