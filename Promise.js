// var rr = new Promise((reject,resolve)=>{
//     var test = true 
//     if (test) {
//         resolve('test passed')
//     } else {
//         reject('Test REJECTED')
//     }
// })

// rr.then((resultat)=>console.log(resultat)).catch((error)=>console.log(error))


// var proSomme = new promise((reject,resolve)=>{
//     var a = 8
//     var b = undefined

//     var somme = a + b 

//     if (somme) {
//         resolve(somme)
        
//     } else {
//         reject('manehssebesh')
        
//     }
// })

// proSomme.then((mahmoud)=>
// console.log(mahmoud)).catch((rania)=>console.log(rania))


// var sum = 0

// console.log("Debut")

// for (let i = 0; i < 1000000; i++){
//     sum = sum + i
// }
// console.log(sum)

// console.log('Fin') 


// var somP = new promise((reject,resolve)=>{
//     var sum = 0

//     for (let i = 0; i< 10000; i++){
//         sum = sum +i
//     }
// if (sum){
//     resolve(sum)
// }else{
//     reject("manhssebesh")
// }

// })

// console.log("Debut")


// somP.then((resultat)=>console.log(resultat)).catch((err)=>console.log(err))
// console.log("Fin")

// // Ex 1 


// const attente=()=>new Promise((resolve)=> setTimeout(resolve, 2000))


// var tab = [2,4,8,9,6]

// var affiche=async(t)=>{
// for (let i = 0; i < t.length; i++){
//     console.log(t[i])
//     await attente()
// }


// }

// affiche(tab)


// // EX2

// const awaitCall=()=>
// fetch('https://jsonplaceholder.typicode.com/users/5').then((res)=>res.json()).then((json)=>console.log(json)).catch((err)=>console.log(err))
 

// awaitCall()


// // EX3


// const awaitCall=async()=>{
//     try {
//     const res = await
//        fetch('https:jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// awaitCall()


// // EX4

// const attente=()=> new promise ((resolve)=>setTimeout(resolve,2000))


// const fun1=async()=>{ 
//     await attente()

//     console.log('this is function 1')
// }


// const fun2=async()=>{
//      await attente()

//     console.log('this is function 2')
// }


// const fun3=async()=>{
//      await attente()

//     console.log('this is function 3')
// }

// const chainedAsyncFunctins=async()=>{
//     await fun1()
//     await fun2()
//     await fun3()

// }
// chainedAsyncFunctins() 


// // EX5


// const conso1=async()=>{
//     const res = await fetch('https:jsonplaceholder.typicode.com/users/1')

// const data = await res.json()
// return data
// }

// const conso2=async()=>{
//     const res = await fetch('https:jsonplaceholder.typicode.com/users/10')

//     const data = await res.json()

//     return data
// }


// const concurrentRequests=async()=>{

//     const tab = await Promise.all([conso1(),conso2()])

//     for (let i = 0; i < tab.length; i++){
//         console.log(tab[i].name)
//     }
// }
// concurrentRequests()

// var tabApi = [
//     "https:jsonplaceholder.typicode.com/users/7",
//     "https:jsonplaceholder.typicode.com/users/5",
// ]

// const consoApi=async(url)=>{
//     const res = await fetch(url)
//     const data = await res.json()
//     return data 
// }

// const parallelCalls=async()=>{
//     var apis = tabApi.map((el,i,t)=> consoApi(el))

//     const tab = await Promise.all(apis)

//     for(let i = 0; i < tab.length; i++){
//         console.log(tab[i].name)
//     }
// }
// parallelCalls()