const ClinicList = (props) => (

	<div className="container ">
		<div className="products__list">
			<div className="products__list-image">
				<img className="products__list-image--picture" src={props.image} alt={props.title}></img>
			</div>
			<ul className="products__list-info">
				<li><ul className="products__list-info--headtext">
						<li className="products__list-info--headtext__type good-list__product-type">{props.type}</li>
						<li className="products__list-info--headtext__type good-list__product-price">Price:<span style={{color : "#38CD3E"}}> {props.price} UAH</span></li>
					</ul>	
				</li>
				<li className="products__list-info--headtext__type good-list__product-price hide">Price:<span style={{color : "#38CD3E"}}> {props.price} UAH</span></li>
				<li className="products__list-info__product-name  good-list__product-name">{props.name}</li>
				<li></li>
				<li className="products__list-info__product-description good-list__product-description">
					Comhar All-in-One Standing Desk offers the perfect solution for working from home.
					This revolutionary workstation is a versatile and practical standing desk that not only helps boost.
					productivity by preventing you from sitting all day, but it's packed with features and a classy design that sets it apart.
				</li>
				
				<li className="products__list-info__button-container">
					<button className="products__list-info__button good-list__product-button">Amazon</button>
				</li>
			</ul>
		</div>
	</div>
)
export default ClinicList;

