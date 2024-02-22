export default function Card(props) {
  return (
    <div
      class="bg-white px-4 py-2 text-center rounded-md shadow-md"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {props.children}
    </div>
  );
}
