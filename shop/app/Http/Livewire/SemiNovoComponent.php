<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Http;
use Livewire\Component;

class SemiNovoComponent extends Component
{
    public $searchResult = [];

    public function render()
    {
        $response =  Http::get('http://localhost:3000/api/veiculos');
        $this->searchResult = $response->json();
        return view('livewire.semi-novo-component')->layout('layouts.base');
    }
}
