export const event = [
    { id: 0, name: "John"},
    { id: 1, name: "Jake"},
    { id: 2, name: "Jill"},
    { id: 3, name: "Jimmy"},
]




export const getPerson = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name: event})
        //reject({msg: "Request Failed"})
      }, 4000);
    })  
}