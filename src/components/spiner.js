import "./spiner.css";

export default function Spiner() {
  return (
    <div class="loadingContainer">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
