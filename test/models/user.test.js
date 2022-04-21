const User = require('./../../app/models/User')

describe ("prueba jest",() =>{
 test("prueba 1 ", ()=>{

   const user = new User ( 1,"ChristainDm","chris","Biograqfia","data","que ondas")
   expect(user.id).toBe(1)
 })
 test("requerimientos 2 fechas en atibutos de userr" ,()=>{
  const user =new User (1,"ChristianDm", "chris","bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdate).not.toBeUndefined()
 })

})