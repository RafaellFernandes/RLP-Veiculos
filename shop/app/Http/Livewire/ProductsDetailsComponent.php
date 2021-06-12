<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ProductsDetailsComponent extends Component
{
    public function render()
    {
        return view('livewire.products-details-component')->layout('layouts.base');
    }
}
