'use strict'

//Charts
let ctx = document.getElementById('monthlySales').getContext('2d')
let pieCtx = document.getElementById('deptSales').getContext('2d')

let yearlyLabel = document.getElementById('yearlyTotal')

//Values from the form
let newAmount = document.getElementById('itemAmount')
let newMonth = document.getElementById('monthId')
let hikingRadio = document.getElementById('hiking')
let runningRadio = document.getElementById('running')
let huntingRadio = document.getElementById('hunting')

let yearlyTotal = 0



let monthlySales = new Map()

function addSale(){
    monthlySales.set(newMonth.value, parseInt(newAmount.value))
    
    //Update our labels
    monthlySalesChart.data.labels = Array.from(monthlySales.keys())
    monthlySalesChart.data.datasets[0].data = Array.from(monthlySales.values())

    console.log(monthlySales.keys())
    console.log(monthlySales.values())

    yearlyTotal=0

    for(let amount of monthlySales.values()){
        yearlyTotal += amount
        yearlyLabel.innerHTML= yearlyTotal

        /* monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount)
        }) */
    }
    monthlySalesChart.update()
}

function findSale(){
    console.log(monthlySales.get(1))
}

function deleteSale(){
    monthlySales.delete(1)
}

// Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgb(239,118,122)',
                'rgb(238,184,104)',
                'rgb(75,166,223)',
                'rgb(239,118,122)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            ticks: {
                beginAtZero: true
            }
        }
    }
})


//Map addSale
//let monthlySales = new Set() //you can add initial values ...Set([1000,2000])
//let monthlyLabels = new Set() //you can add objects ...Set([{test:'This'}])

/*
let hiking = {category:'Hiking'}
let running = {category:'Running'}
let hunting = {category:'Hunting'}

const categories = new WeakSet()
//categories.add(hiking, running, hunting)
//alert(categories.has(hiking))


//addSale using Set
function addSale() {
    monthlySales.add(parseInt(newAmount.value))
    monthlyLabels.add(newMonth.value)

    yearlyTotal = 0
    for (let amount of monthlySales) {
        yearlyTotal += amount
        yearlyLabel.innerHTML = yearlyTotal

        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount)
        })
    }

    monthlySalesChart.data.labels = Array.from(monthlyLabels)
    monthlySalesChart.update()

    if(hikingRadio.cheked){
       categories.add(hiking) 
    }else if(runningRadio.cheked){
        categories.add(running)
    }else if(huntingRadio){
        categories.add(hunting)
    }

    console.log(categories)
}

function deleteVal() {
    //monthlySales.delete(newAmount.value)
    monthlySales.forEach((value1, value2, monthlySales) => {
        alert(value1);
    })
    monthlyLabels.delete(newMonth.value)
    console.log(monthlySales)
}
*/



/*let monthlySales = Array.of( 15000,13000,8000, 1000)
let monthlyLabels = Array.of('Sep','Oct', 'Nov', 'Dec')

let deptSales = Array.of(12,9,3)
let deptLabels = Array.of('Hiking', 'Running', 'Hunting')
*/



/*
function addYearlyTotal(x){
  yearlyTotal += x
}

monthlySales.forEach(addYearlyTotal)

let sepNums = Array.of(1200,1000,1900)
let octNums = Array.of(1400,1400,1600)
let novNums = Array.of(1100,1100,1600)
let decNums = Array.of(1100,1700,1300)

//let total = Array.of(addYearlyTotal(...sepNums) ,addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums))
//console.log(addYearlyTotal(...total))

//let yearlyTotal = addYearlyTotal(...monthlySales)
//console.log("Yearly Total: "+ yearlyTotal);
yearlyLabel.innerHTML = "$" + yearlyTotal

function findOver1500(){
    let firstEl = monthlySales.find(element => element > 1500)
    let firstElIndex = monthlySales.findIndex(element => element > 1500)
    console.log(firstElIndex+" : "+firstEl)
}

function resetNumbers(){
    monthlySales.fill(0)
    monthlySalesChart.update();

}

*/


/*
// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgb(238,184,104)',
                'rgb(75,166,223)',
                'rgb(239,118,122)',
            ],
            borderWidth: 0
        }]
    },
    options: {

    }
})
*/