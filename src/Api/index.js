import axios from 'axios';
export const getDataStoriesId=(dataUrl,callBackSuccFunStories,callBackSuccFunStory,callBackFailFun)=>{
    axios.get(dataUrl)
    .then(callBackSuccFunStories)
    .then((res)=>GetStories(res,callBackSuccFunStory,callBackFailFun))
    .catch(callBackFailFun)
}


export const GetStories=(storiesArr,callBackSuccFun,callBackFailFun,from=0,to=10)=>{
    axios.all(storiesArr.slice(from,to).map((url) => axios(`https://hacker-news.firebaseio.com/v0/item/${url}.json`)
    .then(res=>res.data)))
    .then(callBackSuccFun)
    .catch(callBackFailFun)
}
