<?php
 // $response =  Http::get('https://mockapi.io/projects/60c6aecd19aa1e001769f8e2/veiculos'.'novo');
namespace App\Http\Livewire;

use Illuminate\Support\Facades\Http;
use Livewire\Component;

class NovosComponent extends Component
{
    public $searchResult = [];

    public function render(){
        $response =  Http::get('http://localhost:3000/api/veiculos');
        $this->searchResult = $response->json();
        return view('livewire.novos-component')->layout('layouts.base');
    }
}
