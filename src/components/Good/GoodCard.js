import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";



const GoodCard = (props) => {
	console.log("gggg", props.gallery)
	return (

	<div className='container good__container'>
		<div className='good__content'>
			<div className='good__content-slider--p'>
				<div className='good__content-image'>
					<img className="good__content-image--picture" src={props.image} alt={props.title}></img>
				</div>
				<div className='slider-items'>
					{props.gallery.map(({ id, attributes }) => (
									<img className='good__content-slider' key={id} src={attributes.url}/>
					))}
				</div>
			</div>	
			<div className='good__content-info'>
				<div className='good__content-info--main'>
					<ul className='good__content-info--main__list'>
						<li className='good__content-info--main__list--type good-list__type'>{props.type}</li>
						<li className='good__content-info--main__list--name good-list__name'>{props.name}</li>
						<li>
							<ul className='good__content-info--main__list--price--p'>
								<li className='good__content-info--main__list--price good-list__price'>
									<span>
										{props.price} UAH
									</span>
								</li>
								<li >
									<span className='good__list-info__button-container info__button-container'>
											<button className="products__list-info__button good-list__product-button">Amazon</button>
									</span>
								</li>
							</ul>
						</li>
						<li className='good__content-info--main__list--description good-list__description'>{props.description}</li>
					</ul>
				</div>
				<div className='good__content-info--characteristic'>
					<div className='good__content-info--characteristic--title'>Сharacteristic</div>
					<ul className='good__content-info--characteristic__list'>
						<li>
							<ul className='good__content-info--characteristic__list--item'>
								<li className='good__content-info--characteristic__list--item__svg'>
									<svg className='good'width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00038 3.65242C3.0002 3.71467 2.9826 3.77563 2.94956 3.82839C2.91652 3.88115 2.86936 3.9236 2.81344 3.95094C2.75751 3.97828 2.69505 3.98941 2.63312 3.98307C2.57119 3.97674 2.51228 3.95319 2.46305 3.91509L0.339046 2.26309C0.299144 2.23191 0.266869 2.19206 0.244672 2.14654C0.222474 2.10103 0.210938 2.05106 0.210938 2.00042C0.210938 1.94979 0.222474 1.89981 0.244672 1.8543C0.266869 1.80879 0.299144 1.76893 0.339046 1.73776L2.46305 0.0844233C2.51246 0.0461862 2.57162 0.0226052 2.63378 0.01637C2.69595 0.0101348 2.75862 0.0214963 2.81464 0.0491588C2.87066 0.0768213 2.91777 0.119671 2.95062 0.172821C2.98346 0.22597 3.0007 0.28728 3.00038 0.349757V1.33642H11.0004V0.34709C11.0004 0.284608 11.0179 0.22338 11.051 0.170389C11.0841 0.117399 11.1315 0.0747799 11.1876 0.0473945C11.2438 0.0200092 11.3065 0.00895989 11.3686 0.0155071C11.4308 0.0220543 11.4898 0.0459345 11.539 0.0844233L13.6617 1.73642C13.7016 1.7676 13.7339 1.80746 13.7561 1.85297C13.7783 1.89848 13.7898 1.94845 13.7898 1.99909C13.7898 2.04973 13.7783 2.0997 13.7561 2.14521C13.7339 2.19072 13.7016 2.23058 13.6617 2.26176L11.539 3.91509C11.4897 3.95365 11.4306 3.97755 11.3683 3.98404C11.3061 3.99054 11.2432 3.97938 11.187 3.95183C11.1308 3.92428 11.0835 3.88146 11.0505 3.82828C11.0175 3.77509 11.0001 3.71369 11.0004 3.65109V2.66709H3.00038V3.65242ZM11.667 6.66709H2.33371C2.1569 6.66709 1.98733 6.73733 1.86231 6.86235C1.73728 6.98738 1.66705 7.15695 1.66705 7.33376V16.6671C1.66705 16.8439 1.73728 17.0135 1.86231 17.1385C1.98733 17.2635 2.1569 17.3338 2.33371 17.3338H11.667C11.8439 17.3338 12.0134 17.2635 12.1384 17.1385C12.2635 17.0135 12.3337 16.8439 12.3337 16.6671V7.33376C12.3337 7.15695 12.2635 6.98738 12.1384 6.86235C12.0134 6.73733 11.8439 6.66709 11.667 6.66709ZM2.33371 5.33376C1.80328 5.33376 1.29457 5.54447 0.919499 5.91954C0.544426 6.29462 0.333712 6.80332 0.333712 7.33376V16.6671C0.333712 17.1975 0.544426 17.7062 0.919499 18.0813C1.29457 18.4564 1.80328 18.6671 2.33371 18.6671H11.667C12.1975 18.6671 12.7062 18.4564 13.0813 18.0813C13.4563 17.7062 13.667 17.1975 13.667 16.6671V7.33376C13.667 6.80332 13.4563 6.29462 13.0813 5.91954C12.7062 5.54447 12.1975 5.33376 11.667 5.33376H2.33371ZM18.6524 8.00042H17.667V16.0004H18.6524C18.7146 16.0006 18.7756 16.0182 18.8283 16.0512C18.8811 16.0843 18.9236 16.1314 18.9509 16.1874C18.9782 16.2433 18.9894 16.3058 18.983 16.3677C18.9767 16.4296 18.9531 16.4885 18.915 16.5378L17.263 18.6618C17.2319 18.7017 17.192 18.7339 17.1465 18.7561C17.101 18.7783 17.051 18.7899 17.0004 18.7899C16.9497 18.7899 16.8998 18.7783 16.8543 18.7561C16.8087 18.7339 16.7689 18.7017 16.7377 18.6618L15.0844 16.5378C15.0462 16.4884 15.0226 16.4294 15.0164 16.3674C15.0101 16.3053 15.0213 16.2427 15.0488 16.1868C15.0763 16.1308 15.119 16.0837 15.1719 16.0507C15.2249 16.0178 15.286 16.0004 15.3484 16.0004H16.3337V8.00042H15.3484C15.2861 8.00025 15.2252 7.98264 15.1724 7.9496C15.1197 7.91656 15.0772 7.86941 15.0499 7.81348C15.0225 7.75756 15.0114 7.69509 15.0177 7.63316C15.0241 7.57124 15.0476 7.51232 15.0857 7.46309L16.7377 5.33909C16.7689 5.29919 16.8087 5.26691 16.8543 5.24472C16.8998 5.22252 16.9497 5.21098 17.0004 5.21098C17.051 5.21098 17.101 5.22252 17.1465 5.24472C17.192 5.26691 17.2319 5.29919 17.263 5.33909L18.9164 7.46309C18.9545 7.51241 18.9781 7.57145 18.9844 7.6335C18.9907 7.69554 18.9794 7.75811 18.9519 7.81408C18.9244 7.87005 18.8818 7.91719 18.8288 7.95013C18.7759 7.98307 18.7147 8.00049 18.6524 8.00042Z" fill="#2B2B2A"/>
									</svg>
									<span className='characteristic__list--attributes'>
										Dimensions
									</span>
								</li>
								<li className='characteristic__list--attributes-value'>
									{props.dimensions} cm
								</li>
							</ul>
						</li>
						<li>
							<ul className='good__content-info--characteristic__list--item'>
								<li className='good__content-info--characteristic__list--item__svg'>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M17.0827 1.66699H2.91602C2.58449 1.66699 2.26655 1.79869 2.03213 2.03311C1.79771 2.26753 1.66602 2.58547 1.66602 2.91699V17.0837C1.66602 17.4152 1.79771 17.7331 2.03213 17.9675C2.26655 18.202 2.58449 18.3337 2.91602 18.3337H17.0827C17.4142 18.3337 17.7321 18.202 17.9666 17.9675C18.201 17.7331 18.3327 17.4152 18.3327 17.0837V2.91699C18.3327 2.58547 18.201 2.26753 17.9666 2.03311C17.7321 1.79869 17.4142 1.66699 17.0827 1.66699Z" stroke="#2B2B2A" stroke-width="1.5" stroke-linejoin="round"/>
										<path d="M5 7.93945C6.38542 6.27279 8.05208 5.43945 10 5.43945C11.9479 5.43945 13.6146 6.27279 15 7.93945" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round"/>
										<path d="M10 12.917C10.3315 12.917 10.6495 12.7853 10.8839 12.5509C11.1183 12.3165 11.25 11.9985 11.25 11.667C11.25 11.3355 11.1183 11.0175 10.8839 10.7831C10.6495 10.5487 10.3315 10.417 10 10.417C9.66848 10.417 9.35054 10.5487 9.11612 10.7831C8.8817 11.0175 8.75 11.3355 8.75 11.667C8.75 11.9985 8.8817 12.3165 9.11612 12.5509C9.35054 12.7853 9.66848 12.917 10 12.917Z" fill="#2B2B2A"/>
										<path d="M7.91602 8.75L10.0027 11.6667" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round"/>
									</svg>
									<span className='characteristic__list--attributes'>
										cm Weight:
									</span>
								</li>
								<li className='characteristic__list--attributes-value'>
									{props.weight} kg
								</li>
							</ul>
						</li>
						<li>
							<ul className='good__content-info--characteristic__list--item'>
								<li className='good__content-info--characteristic__list--item__svg'>
								<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.66602 1.33301H14.9993C15.4414 1.33301 15.8653 1.5086 16.1779 1.82116C16.4904 2.13372 16.666 2.55765 16.666 2.99967V12.9997C16.666 13.4417 16.4904 13.8656 16.1779 14.1782C15.8653 14.4907 15.4414 14.6663 14.9993 14.6663H4.99935C4.55732 14.6663 4.1334 14.4907 3.82084 14.1782C3.50828 13.8656 3.33268 13.4417 3.33268 12.9997V7.99967M9.99935 5.49967V1.33301M6.66602 4.66634H2.49935" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
									<span className='characteristic__list--attributes'>
										Material:
									</span>
								</li>
								<li className='characteristic__list--attributes-value'>
									{props.materials}
								</li>
							</ul>
						</li>
						<li>
							<ul className='good__content-info--characteristic__list--item good__content-info--characteristic__list--item-withoutborder'>
								<li className='good__content-info--characteristic__list--item__svg'>
								<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.83268 9.16699L9.16602 1.66699C9.82906 1.66699 10.4649 1.93038 10.9338 2.39923C11.4026 2.86807 11.666 3.50395 11.666 4.16699V7.50033H16.3827C16.6243 7.49759 16.8636 7.54741 17.084 7.64634C17.3044 7.74527 17.5007 7.89094 17.6592 8.07325C17.8178 8.25557 17.9348 8.47018 18.0021 8.7022C18.0695 8.93423 18.0856 9.17812 18.0493 9.41699L16.8993 16.917C16.8391 17.3144 16.6372 17.6767 16.3309 17.937C16.0247 18.1973 15.6346 18.3382 15.2327 18.3337H5.83268M5.83268 9.16699V18.3337M5.83268 9.16699H3.33268C2.89065 9.16699 2.46673 9.34259 2.15417 9.65515C1.84161 9.96771 1.66602 10.3916 1.66602 10.8337V16.667C1.66602 17.109 1.84161 17.5329 2.15417 17.8455C2.46673 18.1581 2.89065 18.3337 3.33268 18.3337H5.83268" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
									<span className='characteristic__list--attributes'>
										Additional features:
									</span>
								</li>
								<li className='characteristic__list--attributes-value'>
									{props.additionalFeatures}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className='good__content--benefits'>
			<div className='good__content--benefits__tables'>
				<div className='good__content--benefits__tables--elements'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="12" fill="#38CD3E"/>
						<path d="M17.6667 8L10.3333 15.3333L7 12" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span className='good__content--benefits__tables-title benefits__title'>Pros</span>
					<div className='good__content--benefits__tables--elements__list benefits__list--item'>
						<ReactMarkdown 
							children={props.pros} 
							remarkPlugins={[remarkGfm]} 
						/>
					</div>
				</div>
			</div>
			<div className='good__content--benefits__tables'>
				<div className='good__content--benefits__tables--elements'>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="12" fill="#EA4335"/>
					<path d="M16 8L8 16" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M8 8L16 16" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
					<span className='good__content--benefits__tables-title benefits__title'>Pros</span>
					<div className='good__content--benefits__tables--elements__list benefits__list--item'>
						<ReactMarkdown 
							children={props.pros} 
							remarkPlugins={[remarkGfm]} 
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

)}
export default GoodCard;

