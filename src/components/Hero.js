import React, { Component } from 'react';
import RevSlider, { Slide, Caption } from 'react-rev-slider';

class Hero extends Component {

    render() {
        return ( 
            <div>
                <RevSlider config={config}>
                
                    <Slide class="rev_slider"
                        src="/assets/images/slides/1.jpg"
                        alt="slidebg1"
                        data-bgfit="cover"
                        data-bgposition="top center"
                        data-bgrepeat="no-repeat"
                        data-bgparallax="1"
                        slideProperties={{
                            'data-transition': "fade",
                            'data-slotamount': "7",
                            'data-masterspeed': "1500"
                        }}
                    >   
                        <Caption
                            class="tp-caption  tp-resizeme"
                            data-x="left" data-hoffset="0" 
                            data-y="top" data-voffset="195" 
                            data-transform_idle="o:1;"         
                            data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                            data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                            data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                            data-splitin="none" 
                            data-splitout="none"
                            data-responsive_offset="on"
                            data-start="700"
                        >
                            <div className="slide-content middle-slide text-center">
                                <div className="title">We have done more than <span>2000 projects Since 1978</span></div>
                                <div className="big-title">Certfied   Landscapers</div>
                                <div className="text">We provide ongoing property maintenance which includes<br/>lawn mowing, fertilizing, spring & fall cleanups.</div>
                            </div>
                        </Caption>
                    </Slide>
                    <Slide class="rev_slider"
                        src="/assets/images/slides/1.jpg"
                        alt="slidebg1"
                        data-bgfit="cover"
                        data-bgposition="top center"
                        data-bgrepeat="no-repeat"
                        data-bgparallax="1"
                        slideProperties={{
                            'data-transition': "fade",
                            'data-slotamount': "7",
                            'data-masterspeed': "1500"
                        }}
                    >   
                        <Caption
                            class="tp-caption  tp-resizeme"
                            data-x="left" data-hoffset="0" 
                            data-y="top" data-voffset="195" 
                            data-transform_idle="o:1;"         
                            data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                            data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                            data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                            data-splitin="none" 
                            data-splitout="none"
                            data-responsive_offset="on"
                            data-start="700"
                        >
                            <div className="slide-content left-slide">
                                <div className="title">We have done more than 2000 projects Since 1978</div>
                            </div>
                        </Caption>
                    </Slide>
                
                </RevSlider>

                {/*<section className="rev_slider_wrapper">
                    <div id="slider1" className="rev_slider"  data-version="5.0">
                        <ul>
                            <li data-transition="fade">
                                <img src="/assets/images/slides/1.jpg" alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                                
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="left" data-hoffset="0" 
                                    data-y="top" data-voffset="195" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="700">
                                    <div className="slide-content left-slide">
                                        <div className="title">We have done more than 2000 projects Since 1978</div>
                                    </div>
                                </div>
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="left" data-hoffset="0" 
                                    data-y="top" data-voffset="239" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="1500">
                                    <div className="slide-content left-slide">
                                        <div className="big-title"><span>Experienced</span> Landscapers</div>
                                    </div>
                                </div>
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="left" data-hoffset="0" 
                                    data-y="top" data-voffset="342" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-75%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="2500">
                                    <div className="slide-content left-slide">
                                        <div className="text">We provide ongoing property maintenance which includes<br/>lawn mowing, fertilizing, spring & fall cleanups.</div>
                                    </div>
                                </div>
                                <div className="tp-caption tp-resizeme" 
                                    data-x="left" data-hoffset="0" 
                                    data-y="top" data-voffset="447" 
                                    data-transform_idle="o:1;"                         
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"                     
                                    data-splitin="none" 
                                    data-splitout="none" 
                                    data-responsive_offset="on"
                                    data-start="3500">
                                    <div className="slide-content left-slide">
                                        <div className="btns-box">
                                            <a href="about.html" className="btn-one thm-bg-clr">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li data-transition="fade">
                                <img src="/assets/images/slides/3.jpg"  alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                                
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="right" data-hoffset="0" 
                                    data-y="top" data-voffset="191" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="700">
                                    <div className="slide-content right-slide">
                                        <div className="title">We have done more than 2000 projects Since 1978</div>
                                    </div>
                                </div>
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="right" data-hoffset="0" 
                                    data-y="top" data-voffset="252" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="1500">
                                    <div className="slide-content right-slide">
                                        <div className="big-title"><span>Reputable</span> Landscapers</div>
                                    </div>
                                </div>
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="right" data-hoffset="0" 
                                    data-y="top" data-voffset="374" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="2500">
                                    <div className="slide-content right-slide">
                                        <div className="text">We provide ongoing property maintenance which includes<br/>lawn mowing, fertilizing, spring & fall cleanups.</div>
                                    </div>
                                </div>
                                <div className="tp-caption tp-resizeme" 
                                    data-x="right" data-hoffset="0" 
                                    data-y="top" data-voffset="469" 
                                    data-transform_idle="o:1;"                         
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"                     
                                    data-splitin="none" 
                                    data-splitout="none" 
                                    data-responsive_offset="on"
                                    data-start="3500">
                                    <div className="slide-content right-slide">
                                        <div className="btns-box">
                                            <a href="about.html" className="btn-one thm-bg-clr">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>
                            <li data-transition="fade">
                                <img src="/assets/images/slides/2.jpg" alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                                
                                <div className="tp-caption  tp-resizeme" 
                                    data-x="center" data-hoffset="0" 
                                    data-y="top" data-voffset="204" 
                                    data-transform_idle="o:1;"         
                                    data-transform_in="x:[0%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                                    data-splitin="none" 
                                    data-splitout="none"
                                    data-responsive_offset="on"
                                    data-start="1500">
                                    <div className="slide-content middle-slide text-center">
                                        <div className="title">We have done more than <span>2000 projects Since 1978</span></div>
                                        <div className="big-title">Certfied   Landscapers</div>
                                        <div className="text">We provide ongoing property maintenance which includes<br/>lawn mowing, fertilizing, spring & fall cleanups.</div>
                                        <div className="btns-box">
                                            <a href="about.html" className="btn-one thm-bg-clr">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </section>*/}
            </div>
        );
    }
}

export default Hero;

const config = {
    delay:9000,
    startwidth:1170,
    startheight:500,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
};