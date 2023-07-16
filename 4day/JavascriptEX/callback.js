function a(cb){
    setTimeout(() => {
        console.log('a work');
        cb()
    }, 5000);
}
function b(){
    console.log('b work');
}

a(funciton(){
    b()
})
// 함수전달할테니 일처리 하고나서 b 실행해