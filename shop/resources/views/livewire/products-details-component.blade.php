 <div class="page-heading about-heading header-text" style="background-image: url({{ asset('assets/images/heading-6-1920x500.jpg')}});">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h2>Product Details</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div>
            <img src="{{ asset('assets/images/product-1-370x270.jpg')}}" alt="" class="img-fluid wc-image">
          </div>
          <br>
          <div class="row">
            <div class="col-sm-4 col-xs-6">
              <div>
                <img src="{{ asset('assets/images/product-1-370x270.jpg')}}" alt="" class="img-fluid">
              </div>
              <br>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div>
                <img src="{{ asset('assets/images/product-2-370x270.jpg')}}" alt="" class="img-fluid">
              </div>
              <br>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div>
                <img src="{{ asset('assets/images/product-3-370x270.jpg')}}" alt="" class="img-fluid">
              </div>
              <br>
            </div>
          </div>
        </div>

        <div class="col-md-8 col-xs-12">
          <form action="#" method="post" class="form">
            <h2>Lorem ipsum dolor sit amet.</h2>

            <br>

            <p class="lead">
              <small><del> $999.00</del></small><strong class="text-primary">$779.00</strong>
            </p>

            <br>

            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ratione molestias maxime odio. Provident ratione vero, corrupti, optio laborum aut!
            </p>

            <br> 

            <div class="row">
              <div class="col-sm-4">
                <label class="control-label">Extra 1</label>
                <div class="form-group">
                  <select class="form-control">
                    <option value="0">18 gears</option>
                    <option value="1">21 gears</option>
                    <option value="2">27 gears</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                <label class="control-label">Quantity</label>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="1">
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="latest-products">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Similar Products</h2>
            <a href="/shop">view more <i class="fa fa-angle-right"></i></a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-1-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Omega bicycle</h4></a>
              <h6><small><del>$999.00 </del></small> $779.00</h6>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-2-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Nike Revolution 5 Shoes</h4></a>
              <h6><small><del>$99.00</del></small>  $79.00</h6>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails"><img src="{{ asset('assets/images/product-3-370x270.jpg')}}" alt=""></a>
            <div class="down-content">
              <a href="/productDetails"><h4>Treadmill Orion Sprint</h4></a>
              <h6><small><del>$1999.00</del></small>   $1779.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>