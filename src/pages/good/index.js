import {useRouter} from "next/router";
import Link from "next/link";

import GoodList from "@/components/Good/GoodList";

const GoodsPage = (props) => {
    const serviceData = props.data.data;

    console.log(props.data);
    console.log(props.data.attributes)
    console.log(serviceData);
    return <div className="container product__list-container">

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/good/' + attributes.slug}>
            <GoodList
                name = {attributes.name}  
                description = {attributes.description}
                image = {attributes.image.data.attributes.url}
                type = {attributes.type}
                price = {attributes.price}
             />
            </Link>
        ))}

    </div>

}
export default GoodsPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/goods?populate[0]=image.media`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}