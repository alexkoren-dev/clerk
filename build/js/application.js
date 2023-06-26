function addSubscribeSection(){jQuery("footer").before('<section class="section-signup"><div class="container"><div class="panel"><div class="panel-body"><div class="row"><div class="col-md-6"><span class="image image-educate"></span><h4>Educate Yourself</h4><p>Our deep legal expertise, distilled into a concise reference written in plain English.  Edited by 20+ leading startup attorneys.</p><a class="btn btn-primary btn-sm" href="https://handbook.clerky.com/" target="_blank">Start Reading</a></div><div class="col-md-6"><span class="image image-loop"></span><h4>Stay in the Loop</h4><p>Sign up for our newsletter to stay in the loop about new features, products, tips and tricks, events, and accelerator programs.</p><form class="js-cm-form subscribe-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="A61C50BEC994754B1D79C5819EC1255CA5E6E332730DE679F23D68FAB4C898F693006E8258589A9E4CCDE5EBB0861842D7DC75B1DF82478EBCDDA01F9C73178B"><div class="input-group input-group-sm"><input id="fieldEmail" name="cm-ykkddky-ykkddky" class="js-cm-email-input  form-control" type="email" placeholder="Email Address" required><div class="input-group-btn"><button class="btn btn-primary btn-sm js-cm-submit-button" type="submit">Subscribe</button></div></div></form></div></div></div></div></div></section>')}function addFooter(){jQuery("footer").remove(),$("#contentArea").after('<div id="footer"><p>Copyright © 2023 Clerky, Inc.</p></div>')}document.addEventListener("DOMContentLoaded",(function(){$("#mainNav .nav").append('<li class="link-marketing">\n      <a href="https://www.clerky.com" target="_blank" class="btn" title="Go to www.clerky.com">\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M17.083 11.417v5.666H2.917V2.917h5.666M17.083 9.528V2.917h-6.61M17.083 2.917l-7.555 7.555" stroke="#6F7680"/>\n        </svg>\n        <span>Go to Clerky</span>\n      </a>\n    </li>'),$("#docsSearch").prepend('<div class="help-center-subtitle">Help center for Attorneys</div>'),$("header .brand").after('<div class="helpcenter-switch desktop">\n        <a class="btn">\n          <span class="text">\n            For Attorneys\n          </span>\n          <span class="icon-new-window">\n            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="m14.75 5.083-5.833 5.834-5.833-5.834" stroke="#989EA6"/>\n            </svg>         \n          </span>\n        </a>\n        <ul class="helpcenter-switch-menu">\n          <li>\n            <a href="https://clerky-staging-attorneys.helpscoutdocs.com/">\n              <span>For Attorneys</span>\n              <span class="icon">\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="m3.337 11.688 6.095 5.932L20.575 6.3" stroke="#008FD5"/>\n                </svg>    \n              </span>\n            </a>\n          </li>\n          <li>\n            <a href="https://staging.help.clerky.com/">\n              <span>For Startups</span>\n              <span class="icon">\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>'),$("header .nav-collapse .nav").prepend('<li>\n        <div class="helpcenter-switch mobile">\n        <a class="btn">\n          <span class="text">\n            For Attorneys\n          </span>\n          <span class="icon-new-window">\n            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="m14.75 5.083-5.833 5.834-5.833-5.834" stroke="#989EA6"/>\n            </svg>         \n          </span>\n        </a>\n        <ul class="helpcenter-switch-menu">\n          <li>\n            <a href="https://clerky-staging-attorneys.helpscoutdocs.com/">\n              <span>For Attorneys</span>\n              <span class="icon">\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="m3.337 11.688 6.095 5.932L20.575 6.3" stroke="#008FD5"/>\n                </svg>\n              </span>\n            </a>\n          </li>\n          <li>\n            <a href="https://staging.help.clerky.com/">\n              <span>For Startups</span>\n              <span class="icon">\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </li>'),$(".collection-category").first().before('<div class="are-you-attorney">\n      <label>Are you a startup?</label>\n      <a href="https://staging.help.clerky.com/" class="btn">\n        <span>View Help Center for Startups</span> \n        <span class="icon">\n          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="m12.704 5.63 4.37 4.37-4.37 4.37M2.49 10h14.428" stroke="#6F7680"/>\n          </svg>\n        </span>\n      </a>\n    </div>'),addFooter(),$(".helpcenter-switch .btn").click((function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).parent().removeClass("active")):($(this).addClass("active"),$(this).parent().addClass("active"))})),$(window).click((function(){$(".helpcenter-switch").removeClass("active"),$(".helpcenter-switch .btn").removeClass("active")})),$(".helpcenter-switch").click((function(n){n.stopPropagation()}))}));