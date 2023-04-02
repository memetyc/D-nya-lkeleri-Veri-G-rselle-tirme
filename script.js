console.log(countries.length)

const subtitle = document.querySelector(".subtitle")
subtitle.textContent =`Toplam ülke sayısı ${countries.length}` 



let dillerinHepsi = countries.reduce((diller,dil)=>{
    diller = diller.concat(dil.languages)
    return diller
},[])

let enPopilerDiller = dillerinHepsi.reduce((diller,dil) =>{
    if(dil in diller){
        diller[dil]++
    }else{
        diller[dil] = 1
    }
    return diller
},[])


const siralamaIcin = Object.entries(enPopilerDiller)

let siralama= (siralamaIcin.sort((a,b)=> b[1]-a[1]))

let ilkOndil=[]
for(let i = 0; i<10;i++){
    ilkOndil.push(siralama[i])
}
console.log(ilkOndil)
let dunyaNufus =0 
let ulkeveNufus = []
countries.forEach(country => {
    dunyaNufus += country.population
    ulkeveNufus.push([country.name,country.population])
});
const popisiralama = ulkeveNufus.sort((a,b)=> b[1]-a[1])

let ilkOnNufus =[]
for(let i=0 ; i<10 ; i++){
    ilkOnNufus.push(popisiralama[i])
}

console.log(
    Math.floor((100*(ilkOnNufus[0][1]))/dunyaNufus)
)


const stat = document.getElementById("stat")




const populationBtn = document.querySelector(".population")
const graphTitle = document.querySelector(".graph-title")




populationBtn.onclick= () => {
    const nufus = document.createElement("div")
    nufus.className="nufus"   
    const div = document.createElement("div")
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const grafik = document.createElement("span")
    div.classList.add("denem")

    span1.textContent="World"
    span2.textContent=dunyaNufus.toLocaleString()
    grafik.style.width=`95%`
    grafik.className="grafik"
    div.appendChild(span1)
    div.appendChild(grafik)
    div.appendChild(span2)
    nufus.appendChild(div)
    graphTitle.textContent="En kalabalık 10 ülke"

    for(let i =0;i<10; i++){

        const div = document.createElement("div")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        const grafik = document.createElement("span")
        div.classList.add("denem")
        grafik.className="grafik"
        
        span1.textContent=ilkOnNufus[i][0]
        span2.textContent=ilkOnNufus[i][1].toLocaleString()
        grafik.style.width=`${Math.floor((100*(ilkOnNufus[i][1]))/dunyaNufus)}%`
    
        div.appendChild(span1)
        div.appendChild(grafik)
        div.appendChild(span2)
        nufus.appendChild(div)
        
    }

   
    if(stat.hasChildNodes()){
        stat.removeChild(stat.children[0])
        stat.appendChild(nufus)
    }else{
        stat.appendChild(nufus)
    }
    
}



const languagesBtn = document.querySelector(".languages")


languagesBtn.onclick = () => {
    const dil = document.createElement("div")
    dil.className="diller"
    graphTitle.textContent="En çok konuşulan 10 dil"
    for(let i =0;i<10; i++){
        
        const div = document.createElement("div")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        const grafik = document.createElement("span")
        div.classList.add("denem")
        grafik.className="grafik"
        
        
        span1.textContent=ilkOndil[i][0]
        span2.textContent=ilkOndil[i][1]
        grafik.style.width=`${ilkOndil[i][1]}%`
    
        div.appendChild(span1)
        div.appendChild(grafik)
        div.appendChild(span2)
        dil.appendChild(div)
        
    }
    if(stat.hasChildNodes()){
        stat.removeChild(stat.children[0])
        stat.appendChild(dil)
    }else{
        stat.appendChild(dil)
    }

}



