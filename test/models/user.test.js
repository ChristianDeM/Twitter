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

    test("requerimientos 3 Agregando getters",()=>{
        const user =new User (1,"ChristianDm", "chris","bio")
        expect(user.getUsername).toBe("ChristianDm")
        expect(user.getbio).toBe("bio")
        expect(user.getdateCreated).not.toBeUndefined()
        expect(user.getlastUpdated).not.toBeUndefined()
    })
    test("requerimientos 4 Agregando setters",()=>{
      const user =new User (1,"ChristianDm", "chris","bio")
       user.newUSername="Yano"
       user.newBio="maka"
      expect (user.newUSername).toBe("Yano")
      expect (user.newBio).toBe("maka")
    })

  })
 

