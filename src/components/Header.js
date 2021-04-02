import food from "./img/chickenandotherfoods.jpg"
function Header() {
  return (
    <div className="card bg-dark text-white">
      <img src={food} className="card-img" ></img>
      <div className="card-img-overlay">
        <h1 className="card-title">Main Menu</h1>
        <p className="card-text"></p>
      </div>
    </div>
  );
}

export default Header;
