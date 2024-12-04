export default function TabButton({ children, isSelected, ...props }) {
  // Utilizando JS Vanilla, precisamos escrever de maneira imperativa
  // document.querySelector("button").addEventListener("click", () => {});
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
