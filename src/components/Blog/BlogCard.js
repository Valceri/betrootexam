import { Prosto_One } from "next/font/google";
import Image from "next/image";
const BlogCard = (props) => (
	<div className="color">

	<div className="blog">
		<div className="container blog__container">
			<div className="blog__card">
				<div className="blog__card-author">
				<span className="author-name blog__author-name">
					{props.name}
				</span>
				<span className="blog__author-name">
					{props.date}
				</span>
				</div>
				<div className="blog__card-title">
					{props.title}
				</div>
				<div className="blog__card-description">
					{props.description}
				</div>
				<div>
				</div>
				<div className="blog__card-tags">
				{props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
				</div>
				<div className="blog__card-img">
					<img className="blog__card-img--styles" src={props.image} alt={props.title} />
				</div>
			</div>
		</div>
	</div>

</div>
)
export default BlogCard;