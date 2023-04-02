import Link from "next/link";
import { useRouter } from "next/router";
import BlogList from "@/components/Blog/BlogList";


const BlogPage = (props) => {
	const router = useRouter()
	const serviceData = props.data.data;

	return <div className="d">
	{serviceData.map(({ id, attributes }) => (
			<Link key={id} href={'/blog/' + attributes.slug}>
				<BlogList 
					image={attributes.image.data[0].attributes.url} 
					title={attributes.title} 
					description={attributes.description} 
					date={attributes.date}
					name={attributes.authors.data[0].attributes.name}				
					tags={attributes.tags.data}
				/>
			</Link>
		))}
	</div>

}
export default BlogPage;


export async function getStaticProps(context) {
	const res = await fetch(`${process.env.API_URL}/blogs?populate=*`)
	const data = await res.json()
	console.log(context);
	return {
		props: { data }, // will be passed to the page component as props
	}
}
