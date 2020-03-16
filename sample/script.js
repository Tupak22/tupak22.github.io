var tl = new TimelineMax();

tl
.set(['#letter_x_path','#letter_e','#letter_m','#logo_letter_w','#logo_letter_a','#logo_letter_t','#logo_letter_c','#logo_letter_h','#logo_letter_e','#logo_letter_r','#bottom_left_part','#bottom_right_part','#top_left_part','#top_right_part','#bottom_left_smiglo','#bottom_right_smiglo','#top_left_smiglo','#top_right_smiglo','#circle'],{autoAlpha:0})

.fromTo('#drone_logo',0.6,{autoAlpha:0,y:-10},{autoAlpha:1,y:0})
.fromTo('#letter_x_path',1, {drawSVG:"0%",stroke:'#fff',fill:'none'}, {autoAlpha:1,stroke:'#fff',drawSVG:"100%", immediateRender:false}, "+=0.1")
.fromTo('#circle',1, {drawSVG:"0%",stroke:'#fff',fill:'none'}, {autoAlpha:1,stroke:'#fff',drawSVG:"100%", immediateRender:false}, "+=0.1")
.to(['#letter_x_path','#circle'],0.6,{fill:'#fff'},'-=0.8')
.fromTo(['#bottom_left_part','#bottom_right_part','#top_left_part','#top_right_part'],1, {drawSVG:"0%",stroke:'#fff',fill:'none'}, {autoAlpha:1,stroke:'#fff',drawSVG:"100%", immediateRender:false}, "+=0.1")
.to(['#bottom_left_part','#bottom_right_part','#top_left_part','#top_right_part'],1,{fill:'#fff'}, "+=0.1")
.fromTo(['#letter_e','#letter_m'],1, {drawSVG:"0%",stroke:'#fff',fill:'none'}, {autoAlpha:1,stroke:'#fff',drawSVG:"100%", immediateRender:false}, "+=0.1")
.to(['#top_left_smiglo','#top_right_smiglo','#bottom_left_smiglo','#bottom_right_smiglo'],2,{autoAlpha:1,rotation:720,transformOrigin:' 50% 50%'})
.fromTo(['#logo_letter_w','#logo_letter_a','#logo_letter_t','#logo_letter_c','#logo_letter_h','#logo_letter_e','#logo_letter_r'],3, {drawSVG:"0%",stroke:'#fff',fill:'none'}, {autoAlpha:1,stroke:'#fff',fill:'#fff',drawSVG:"100%", immediateRender:false}, "-=1.5")
.to('#drone_logo',3,{y:'+=25',repeat: -1,yoyo:true,ease:Back.easeIn}, "-=2")
;

  
 playBtn = $("#playBtn"),
        pauseBtn = $("#pauseBtn"),
        resumeBtn = $("#resumeBtn"),
        reverseBtn = $("#reverseBtn");


 playBtn.click(function(){
        tl.play();
    });
    pauseBtn.click(function(){
        tl.pause();
    });
    resumeBtn.click(function(){
 
        tl.resume();
    });
    reverseBtn.click(function(){
        tl.reverse();
    });
