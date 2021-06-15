<?php

namespace App\Http\Livewire;

use Livewire\Component;

class NovosComponent extends Component
{
    public function render()
    {
        return view('livewire.novos-component')->layout('layouts.base');
    }
}
