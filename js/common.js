function Jump_To_Egg(){
    window.location.href="egg01.html";
}
function jump_to_help(){
    window.location.href="help.html";
}
function go_to_help(){
    window.location.herf="help.html";
}
function Alert_Show(numa){
    switch(numa){
        case 1:
            alert("嘿！七夕节快乐！"+"\n"+"还有，你已经在大厅里了，你见过原地TP吗？(。>︿<)_θ");
         case 2:
            alert("嘿！七夕节快乐！"+"\n"+"还有，你已经在帮助页面里了，你见过原地TP吗？(。>︿<)_θ"); 
        case 3:
            alert("嘿！七夕节快乐！"+"\n"+"还有，你已经在彩蛋大厅里了，你见过原地TP吗？(。>︿<)_θ");
    }
}

function ScreenWidth() {      //获取屏幕尺寸，判断PC端或移动端
    if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
//如果是移动端，则跳转到移动端对应的页面
          window.location.href = 'aknowlege.html';
      }
  }
function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        // if (e.wheelDelta > 0) { //当滑轮向上滚动时
        //     alert("滑轮向下滚动");
        // }
        if (e.wheelDelta < 30) { //当滑轮向下滚动时
            var py1 = document.getElementById("play1");	//歌曲1
            var music_arr = [py1];
            var index = 0;		//数组下标
            music_arr[index].play();
        }
    } else if (e.detail) {  //Firefox滑轮事件
        // if (e.detail> 0) { //当滑轮向上滚动时
        //     alert("滑轮向下滚动");
        // }
        if (e.detail< 15) { //当滑轮向下滚动时
            var py1 = document.getElementById("play1");	//歌曲1
            var music_arr = [py1];
            var index = 0;		//数组下标
            music_arr[index].play();
        }
    }
}
}

function a(){
    var audio = document.getElementById('music'); 
    if(audio.paused){                 
        audio.play();//audio.play();// 播放  
    }
    else{
         audio();
    } 
  }