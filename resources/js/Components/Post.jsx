import { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "@inertiajs/react";

export default function Show() {
    const { props } = usePage();
    const { slug } = props;
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/api/posts/${slug}`)
            .then(response => setPost(response.data))
            .catch(error => console.error("Erro ao carregar post:", error));
    }, [slug]);

    if (!post) {
        return <div className="text-center py-10 text-gray-500">Carregando...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-500 text-sm">
                Publicado em {new Date(post.published_at).toLocaleDateString("pt-BR")}
            </p>
            <img
                src={`/storage/${post.image}`}
                alt={post.title}
                className="w-full mt-4 rounded-lg"
            />
            <div className="mt-6 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
