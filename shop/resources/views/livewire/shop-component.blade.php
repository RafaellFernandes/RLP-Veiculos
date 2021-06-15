 <div class="page-heading about-heading header-text" style="background-image: url({{ asset('assets/images/heading-6-1920x500.jpg')}});">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            {{-- <h4>Lorem ipsum dolor sit amet</h4> --}}
            <h2>Veículos</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="products">
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

        {{-- <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-2-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$99.00</del></small>  $79.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non beatae soluta, placeat vitae cum maxime culpa itaque minima.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-3-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$1999.00</del></small>   $1779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nisi quia aspernatur, harum facere delectus saepe enim?</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-4-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$999.00 </del></small> $779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-5-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$99.00</del></small>  $79.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non beatae soluta, placeat vitae cum maxime culpa itaque minima.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-6-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$1999.00</del></small>   $1779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nisi quia aspernatur, harum facere delectus saepe enim?</p>
            </div>
          </div>
        </div> --}}

        <div class="col-md-12">
          <ul class="pages">
            <li><a href="#">1</a></li>
            <li class="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>