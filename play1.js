//async func with callback func inside
// const fetchData = callback => {
//     setTimeout(()=>{
//         callback('Done!');
//     },1500);
// };
const fetchData = () => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;

};

//利用callback方法获取异步数据
setTimeout(()=>{
    console.log("Timer is done!");
    fetchData(text=>{//这个方法调用之后会在timer is done！执行之后执行
        console.log(text);//fetchData 重写了所以这次不会输出 Done！
    });
},1000);

setTimeout(()=>{//chain promise
    console.log("Timer is done!");
    fetchData()
        .then(text=>{
            console.log(text);
            return fetchData();
            })
            .then(text1=>{
                console.log(text1);
            });
},3000);



console.log('Hello!');
console.log('Hi!');
//make asycn code more manageable