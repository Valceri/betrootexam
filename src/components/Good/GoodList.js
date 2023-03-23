const ClinicList = (props) => (

	<div className="container">
		<div className="products__list">
			<div className="products__list-image">
				<img className="products__list-image--picture" src={props.image} alt={props.title}></img>
			</div>
			<div className="product__list-info">
				<ul className="products__list-info--type">
					<li>{props.type}</li>
					<li>{props.price} <span>UAH</span></li>
				</ul>
			</div>
		</div>
	</div>
)
export default ClinicList;

