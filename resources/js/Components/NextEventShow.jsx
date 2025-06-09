import { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "@inertiajs/react";

export default function NextEventShow() {
    const { props } = usePage();
    const { slug } = props;
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/api/events-calendar/${slug}`)
            .then(response => setPost(response.data))
            .catch(error => console.error("Erro ao carregar post:", error));
    }, [slug]);

    if (!post) {
        return <div className="text-center py-10 text-gray-500">Carregando...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 pt-40">
            <h1 className="text-3xl font-bold">{post.name}</h1>
            <p className="text-gray-500 text-sm">
                Publicado em {new Date(post.created_at).toLocaleDateString("pt-BR")}
            </p>
            <img
                src={`/uploads/${post.image}`}
                alt={post.title}
                className="w-full mt-4 rounded-lg"
            />
            <div
                className="mt-6 text-gray-700 leading-relaxed prose max-w-none prose-img:rounded-lg prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {post.link && (
                <div className="mt-6 flex justify-center">
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <button className="border text-xl bg-fortalorange font-semibold text-white px-5 py-3 rounded-lg flex gap-3 items-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300">
                            Saiba mais sobre o evento
                        </button>
                    </a>
                </div>
            )}
        </div>
    );
}
