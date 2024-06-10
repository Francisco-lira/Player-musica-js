<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    // Função para obter todas as músicas
    public function index()
    {
        $songs = Song::all();
        return response()->json($songs);
    }

    // Função para obter uma música específica pelo ID
    public function show(Song $song)
    {
        return response()->json($song);
    }
}
