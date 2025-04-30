import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.error("Erro ao carregar posts:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-28 px-10">
            {posts.map(post => (
                <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={`./uploads/${post.image}`}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <p className="text-gray-500 text-sm">
                                {new Date(post.published_at).toLocaleDateString("pt-BR")}
                            </p>
                        </div>
                        <Link
                            href={`/post/${post.slug}`}
                            className="mt-3 inline-block px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-blue-700"
                        >
                            Ver mais
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
