<?php

use App\Http\Livewire\AboutusComponent;
use App\Http\Livewire\BlogComponent;
use App\Http\Livewire\CartComponent;
use App\Http\Livewire\CheckoutComponent;
use App\Http\Livewire\ContactComponent;
use App\Http\Livewire\HomeComponent;
use App\Http\Livewire\ProductsDetailsComponent;
use App\Http\Livewire\ShopComponent;
use App\Http\Livewire\TermsComponent;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',HomeComponent::class);

Route::get('/shop',ShopComponent::class);

Route::get('/cart',CartComponent::class);

Route::get('/checkout',CheckoutComponent::class);

Route::get('/aboutus',AboutusComponent::class);

Route::get('/blog',BlogComponent::class);

Route::get('/terms',TermsComponent::class);

Route::get('/testimonials',TermsComponent::class);

Route::get('/contact',ContactComponent::class);

Route::get('/productDetails', ProductsDetailsComponent::class);