import axios from 'axios';
export const getDataApi=(dataUrl,callBackSuccFun,callBackFailFun)=>{
    const storayData=[];
    axios.get(dataUrl)
    .then((res)=>{return res.data})
    .then((res)=>{
        Promise.all(res.slice(0,10).map((url) =>
        axios(`https://hacker-news.firebaseio.com/v0/item/${url}.json`).then((res)=>{
            storayData.push(res.data);
            return (storayData.length===10) &&storayData;          
        }).then(callBackSuccFun)))
    }).catch(callBackFailFun)
}

