export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats notFinished">
        <em>Start adding some items to your packing list. 🫵</em>
      </p>
    );

  //Derived state
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percPacked = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer
      className={percPacked === 100 ? "stats finished" : "stats notFinished"}
    >
      <em>
        {percPacked === 100
          ? "You got everything packed! Ready to go on your adventure!! Have fun! 🙆"
          : `        👜You have ${numItems} items on your list, and you already packed ${" "}
          ${itemsPacked} (${itemsPacked === 0 ? 0 : percPacked} %)
  `}
      </em>
    </footer>
  );
}
