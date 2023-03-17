import { useRouter } from "next/router";
import BlogCard from "../../components/Blog/BlogCard";
import Link from "next/link";
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

const OneBlogPage = (props) => {
	
	const { title, description, richText } = props.data.attributes;
	const {url} = props.data.attributes.image.data[0].attributes;
	const {name} = props.data.attributes.authors.data[0].attributes;
	const {tags} = props.data.attributes;
	const {date} = props.data.attributes;
	// const {image} = props.data.attributes.image;

	return (
		<div>
			<BlogCard 
				tags={tags.data} 	
				title={title}
				description={description}
				image={url}
				name={name}
				date={date}
			/>
			<div className="blog-page__container blog-page__text">
				<ReactMarkdown 
					children={richText} 
					remarkPlugins={[remarkGfm]} 
				/>
			</div>
		</div>
	);
};
export default OneBlogPage;

export async function getStaticProps(context) {
	const res = await fetch(
		`${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
	);
	
	const response = await res.json();

	return {
		props: { data: response.data[0] }, // will be passed to the page component as props
	};
}
// ?filters[slug][$eq]=${context.params.slug}&populate=*`
export async function getStaticPaths() {
	
	const res = await fetch(`${process.env.API_URL}/blogs`);
	const data = await res.json();

	return {
		paths: data.data.map(({ attributes }) => ({
			params: {
				slug: attributes.slug,
			},
		})),
		fallback: false, // can also be true or 'blocking'
	};
}

