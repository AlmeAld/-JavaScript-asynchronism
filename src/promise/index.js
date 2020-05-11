// some thing will happen = algo va a pasar
const somethingWillHappen= () =>{
  return new Promise((resolve, reject) =>{
    if(true){
      resolve('Hey!')
    }else{
      reject('whoooops')
    }
  })
}

somethingWillHappen()
.then(response=>console.log(response))
.catch(err=>console.error(err));

const somethingWillHappen2=()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>resolve('true'), 2000)
    }else{
      const error = new Error ('whoooooooooooooops');
      reject(error)
    }
  })
}

somethingWillHappen2()
.then (response=> console.log(response)) 
.catch(err => console.error(err))

//ejecutando promesas al mismo tiempo(encadenadas)
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
  console.log('Array of results', response);
})
.catch(err =>{
  console.error(err)
})