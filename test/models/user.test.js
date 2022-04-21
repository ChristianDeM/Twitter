const User = require('./../../app/models/User')

describe ("prueba jest",() =>{
 test("prueba 1 ", ()=>{

   const user = new User ( 1,"ChristainDm","chris","Biograqfia","data","que ondas")
   expect(user.id).toBe(1)
 })
})