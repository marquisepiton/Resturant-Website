import orderNow from './img/orderNow.png'
import Menu from './Menu'


function Main() {
  return (
    <div>
    <a>
      <img src={orderNow} className="rounded mx-auto d-block" alt="..."></img>
    </a>
    <h5>ORDER ONLINE NOW</h5>
    <p>Get the best comfort food that a Chocobo will ever eat!</p>
    <p>Order online now, and pick up curbside later!</p>
    <p>Quick....Easy....Delicious!</p>

    <a href="www.google.com"><p>CLICK HERE TO PLACE YOUR ORDER</p></a>
    <Menu/>
    </div>
  );
}

export default Main;
