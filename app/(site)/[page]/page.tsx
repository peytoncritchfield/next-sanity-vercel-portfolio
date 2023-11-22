import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react';

type Props = {
    params: { page: string };
}

export default async function page({ params }: Props) {
    const slug = params.page
    const page = await getPage(slug)
    
    return <div>
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-extrabold">
            {page.title}
        </h1>
        <div className="text-lg text-gray-300 mt-10">
            <PortableText value={page.content}/>
        </div>
    </div>
}