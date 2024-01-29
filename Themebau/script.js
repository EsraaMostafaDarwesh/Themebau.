const slide=document.getElementById('slidee');
const pre=document.getElementById('pre');
const next=document.getElementById('next');
const slide_pre=document.getElementById('slide1');
const slide_next=document.getElementById('slide11');
const imagtap=document.getElementById('imgtaps');
const imgs=[
    'themebau_bootstrap5.jpg',
    'images (1).jpg',
    'images (3).jpg',
    'images (4).jpg',
    'images.jpg',
    'coach-screenshot-2-540x405.jpg',
    'quick-website-ui-kit-1.1.0-cover-540x405.jpg',
    'screenshot-3-540x405.jpg',
    'spyre-preview-1-scaled-540x405.jpg',
    'themebau_bootstrap5.jpg',
    'bb_bdp_thumbnail-540x405.jpg'
]
var count=1;
next.addEventListener('click',()=>{
    count++;
    if(count<(imgs.length-1)){
        slide.src='images/'+imgs[count];
        imagtap.src='images/'+imgs[count];
        slide_pre.src='images/'+imgs[count-1];
        slide_next.src='images/'+imgs[count+1];
    }else{
        count=4;
        slide.src='images/'+imgs[count];
        imagtap.src='images/'+imgs[count];
        slide_pre.src='images/'+imgs[count-1];
        slide_next.src='images/'+imgs[count-2];
    }
})

pre.addEventListener('click',()=>{
    count--;
    if(count>0&&count<(imgs.length-1)){
        slide.src='images/'+imgs[count];
        slide_pre.src='images/'+imgs[count-1];
        slide_next.src='images/'+imgs[count+1];
    }else{
        count=0;
        slide.src='images/'+imgs[count];
        slide_pre.src='images/'+imgs[count+4];
        slide_next.src='images/'+imgs[count+3];
    }
})

//end the slide



//start the model
const open=document.getElementById('search');
const model=document.getElementById('model');
const close=document.getElementById('close');
open.addEventListener('click',()=>{
 model.style.display='block';
})
close.addEventListener('click',()=>{
    model.style.display='none';
})
//end the model


//start the color
const btn=document.getElementById('btn1');
var x=1
btn.addEventListener('click',()=>{
x++;
if(x%2==0){
    document.getElementsByTagName('body')[0].style.background="rgb(223, 217, 217)";
    btn.style.background='#2f3131'; 
    document.getElementsByTagName('ul')[0].style.color='#545f5f';
    document.getElementById('header').style.color='#545f5f';
    document.getElementsByTagName('h1')[1].style.textShadow='none';
    document.getElementsByTagName('p')[0].style.fontWeight='bold';
    document.getElementById('slide1').style.opacity='.7';
    document.getElementById('slide11').style.opacity='.7';
}else{
    document.getElementsByTagName('body')[0].style.backgroundImage="URL('img.jpg')";
    document.getElementsByTagName('body')[0].style.backgroundRepeat='no-repeat';
    document.getElementsByTagName('body')[0].style.backgroundPosition='center';
    document.getElementsByTagName('body')[0].style.backgroundSize='cover';
    document.getElementsByTagName('body')[0].style.width='100%';
    btn.style.background='rgb(221, 223, 217)';
    document.getElementsByTagName('ul')[0].style.color='#989c9c';
    document.getElementById('header').style.color='#989c9c';
    document.getElementsByTagName('h1')[1].style.textShadow=' 2px 2px rgb(78, 76, 76)';
    document.getElementsByTagName('p')[0].style.fontWeight='500';
    document.getElementById('slide1').style.opacity='.5';
    document.getElementById('slide11').style.opacity='.5';
}
})
//end the color


//start the taps
//buttons
const btns=document.querySelectorAll(".btn2");
const btnsdiv=document.querySelector(".btns2");
const heads=document.querySelectorAll(".content");

btnsdiv.addEventListener('click',function (e){
    //console.log('hello')
    const mark=e.target.dataset.mark;
   // console.log(mark)
   if(mark){
       btns.forEach((btn)=>{
           btn.classList.remove('active');
           e.target.classList.add('active');
           heads.forEach((head)=>{
            head.classList.remove('active1');
            const text=document.getElementById(mark);
            text.classList.add('active1');
        })
       })
   }
})
//end buttons
const taps=document.getElementById('taps');
slide.addEventListener('click',()=>{
    taps.style.display='block';
})

const close2=document.getElementById('close2');
close2.addEventListener('click',()=>{
    taps.style.display='none'
})
//const slide=document.getElementById('slidee');
