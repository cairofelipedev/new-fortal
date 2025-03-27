<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Lista os posts mais recentes.
     */
    public function index()
    {
        $posts = Post::where('published', true)
            ->orderBy('published_at', 'desc')
            ->select('id', 'title', 'slug', 'image', 'content', 'published_at')
            ->get();

        return response()->json($posts);
    }

    /**
     * Exibe um post pelo slug.
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)
            ->where('published', true)
            ->firstOrFail();

        return response()->json($post);
    }

    public function showPost($slug)
    {
        return Inertia::render('Post/Show', [
            'slug' => $slug,
        ]);
    }
}
