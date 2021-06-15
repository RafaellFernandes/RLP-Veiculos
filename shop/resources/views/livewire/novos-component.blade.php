
<div class="page-heading about-heading header-text" style="background-image: url({{ asset('assets/images/heading-6-1920x500.jpg')}});">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            <h4>Veículos</h4>
            <h2>Novos</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="products" >
    <div class="container">
      <div class="row">
        @foreach ($searchResult as $resultado)
        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails/{{ $resultado['id'] }}"><img src='{{ $resultado['foto'] }}' class='card-img-top' width='40' height='auto' alt='{{ $resultado['veiculo'] }}'>
              <div class="down-content">
                  <a href="/productDetails"><h4>{{ $resultado['veiculo'] }}</h4></a>
                  <h6>R$  {{ $resultado['preco'] }}</h6>
                  <p>{{ $resultado['opcionais'] }}</p>
              </div>
            </div>
          </div>
          @endforeach
      </div>
     
    </div>
  </div>