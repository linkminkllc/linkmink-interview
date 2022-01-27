
const data = [{id: 1, name: 'Stacy', score: 132}, {id: 2, name: 'Doug', score: 56}, {id: 3, name: 'Paul', score: 42}, {id: 4, name: 'Janet', score: 301}, {id: 5, name: 'Cory', score: 298}, {id: 6, name: 'Aaron', score: 132}]
let data_copy = data
export async function alter_data() {
    data_copy = JSON.parse(JSON.stringify(data))
    data_copy.shift()
    await new Promise(resolve => setTimeout(resolve, Math.random()*5))
    data_copy.shift()
    await new Promise(resolve => setTimeout(resolve, Math.random()*5))
    data_copy.shift()
    return 'Finished'
}
export async function get_data() {
    await new Promise(resolve => setTimeout(resolve, Math.random()*10))
    return data_copy

}