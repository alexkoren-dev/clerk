document.addEventListener("DOMContentLoaded", function() {
  $('#mainNav .nav').append(
    '<li><a class="link-marketing" href="https://www.clerky.com" target="_blank" title="Go to www.clerky.com"><span class="icon-new-window"></span>Go to Clerky</a></li>'
  );

  addSubscribeSection();
  addFooter();
});

function addSubscribeSection() {
  var $footer = jQuery('footer');
  var html = '<section class="section-signup">'
              + '<div class="container">'
                + '<div class="panel">'
                  + '<div class="panel-body">'
                    + '<div class="row">'
                    +	'<div class="col-md-6">'
                        +'<span class="image image-educate"></span>'
                        +'<h4>Educate Yourself</h4>'
                        +'<p>Our deep legal expertise, distilled into a concise reference written in plain English.  Edited by 20+ leading startup attorneys.</p>'
                        +'<a class="btn btn-primary btn-sm" href="https://handbook.clerky.com/" target="_blank">Start Reading</a>'
                      +'</div>'
                      + '<div class="col-md-6">'
                        + '<span class="image image-loop"></span>'
                        + '<h4>Stay in the Loop</h4>'
                        + '<p>Sign up for our newsletter to stay in the loop about new features, products, tips and tricks, events, and accelerator programs.</p>'
                        + '<form class="js-cm-form subscribe-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="A61C50BEC994754B1D79C5819EC1255CA5E6E332730DE679F23D68FAB4C898F693006E8258589A9E4CCDE5EBB0861842D7DC75B1DF82478EBCDDA01F9C73178B">'
                          + '<div class="input-group input-group-sm">'
                            + '<input id="fieldEmail" name="cm-ykkddky-ykkddky" class="js-cm-email-input  form-control" type="email" placeholder="Email Address" required>'
                            + '<div class="input-group-btn">'
                              + '<button class="btn btn-primary btn-sm js-cm-submit-button" type="submit">Subscribe</button>'
                            +'</div>'
                          +'</div>'
                        +'</form>'
                      +'</div>'
                    +'</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</section>';

  $footer.before(html);
}

function addFooter() {
  var $footer = jQuery('footer');
  var footerNavHtml = '<div class="col-sm-12"><ul class="list-unstyled list-inline">'
              + '<li><a href="https://www.clerky.com/site/terms">Terms</a></li>'
              + '<li><a href="https://www.clerky.com/site/privacy">Privacy</a></li>'
              + '<li>Copyright © 2023 <a href="https://www.clerky.com">Clerky</a>, Inc.</li>'
            + '</ul></div>';
  var html = '<div class="container text-muted small footer-bar">'
          +'<div class="row"><div class="col-sm-12">'
            +'<p class="no-margin-bottom">Clerky, Inc. is not an attorney or a law firm, and can only provide self-help services at your specific direction. Clerky, Inc. is a bonded legal document assistant registered in San Mateo County, California (#2022-1, expiring February 27, 2024). Our business address and phone number are 440 N. Barranca Ave. #1881, Covina, CA 91723 and '
              +'<a href="tel:6504405449">650-440-5449.</a>'
            +'</p>'
          +'</div>'+ footerNavHtml +'</div>'
        +'</div>';

  $footer.attr('id', 'footer');
  $footer.html(html);
}
