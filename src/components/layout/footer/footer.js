import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
        <footer class="htc__foooter__area">
            <div class="container">
                <div class="row footer-row">
                         {/* <!-- Start Single Footer Widget --> */}
                        <div class="col-md-3 col-lg-3 col-sm-6">
                            <div class="ft__widget">
                                <div class="footer__details">
                                    <p>Get 10% discount with notified about the latest news and updates.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div class="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                            <div class="ft__widget">
                                <h2 class="ft__title">Newsletter</h2>
                                <div class="newsletter__form">
                                    <div class="input__box">
                                        <div id="mc_embed_signup">
                                            <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate="">
                                                <div id="mc_embed_signup_scroll" class="htc__news__inner">
                                                    <div class="news__input">
                                                        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required="" />
                                                    </div>
                                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                                    <div aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value="" /></div>
                                                    <div class="clearfix subscribe__btn"><input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="bst__btn btn--white__color" />
                                                        
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div class="col-md-3 col-lg-3 col-sm-6 smt-30 xmt-30">
                            <div class="ft__widget contact__us">
                                <h2 class="ft__title">Contact Us</h2>
                                <div class="footer__inner">
                                    <p>319 Clematis St.<br/>Suite 100 WPB, FL 33401</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div class="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                            <div class="ft__widget">
                                <h2 class="ft__title">Follow Us</h2>
                                <ul class="social__icon">
                                    <li><i class="zmdi zmdi-twitter"></i></li>
                                    <li><i class="zmdi zmdi-instagram"></i></li>
                                    <li><i class="zmdi zmdi-facebook"></i></li>
                                    <li><i class="zmdi zmdi-google-plus"></i></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget --> */}
                </div>
                {/* <!-- Start Copyright Area --> */}
                <div class="htc__copyright__area">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div class="copyright__inner">
                                <div class="copyright">
                                    <p>© NATIVE 2020
                                    All Right Reserved.</p>
                                </div>
                                <ul class="footer__menu">
                                    <li>Home</li>
                                    <li>Product</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Copyright Area --> */}
            </div>
        </footer>
    </div>
    );
}

export default Footer;