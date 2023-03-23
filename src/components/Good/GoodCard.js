import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";



const ClinicCard = (props) => {
	return (

	<div className="clinic">
		<div className="container clinic__container">
			<div className="clinic__main-card main-card">
				<img src={props.image} alt={props.name}/>

				<div className="main-card__clinic-title">
					{props.name}<br/>
					{props.type}
				</div>
				<div className="main-card__clinic-description">
					{props.description}
				</div>
			

				<div className="clinic-section__name-adress">
						{props.name}
				</div>
				
				<div>
						<ReactMarkdown
					children={props.services}
					remarkPlugins={[remarkGfm]}
				/>
				</div>
			</div>
		</div>
	</div>

)}
export default ClinicCard;

