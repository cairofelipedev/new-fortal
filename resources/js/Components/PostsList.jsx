import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import style from "@/Components/Search/videoArea/videoArea.module.scss";

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("/api/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Erro ao carregar posts:", error));
    }, []);

    return (
        <div>
            <div className={`${style.infoArea2} max-w-7xl mx-auto`}>
                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-5xl text-4xl pt-28 px-10 text-center">
                    Imprensa
                </h1>
                <p className={`${style.description} px-12 text-lg`}>
                    Espaço para artigos exclusivos escritos pela Assessoria e
                    imprensa: Capuccino, com análises de mercado e novidades.
                    <br/>
                    Cobertura detalhada de eventos e iniciativas promovidas pelo
                    Visite Ceará.
                    <br/><br/>
                    ●Próximos Eventos (calendário):
                    Acompanhe uma lista sempre atualizada dos eventos futuros em Fortaleza, com detalhes sobre datas, locais e programação.
                    <br/>
                    ● Cases de Sucesso:
                     Aqui você pode encontrar informações sobre  eventos que foram Cases de sucesso em nosso destino.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 pt-5  max-w-7xl mx-auto px-5">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={`./uploads/${post.image}`}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex  flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {new Date(
                                        post.published_at
                                    ).toLocaleDateString("pt-BR")}
                                </p>
                            </div>
                            <Link
                                href={`/post/${post.slug}`}
                                className="text-center mt-3 inline-block px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-blue-700"
                            >
                                Ver mais
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
