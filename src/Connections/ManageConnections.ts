

class ManageConnections
{

   static async getusers()
    {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ title: 'React POST Request Example' })
      };

      const response = await fetch("http://localhost:4000/users", requestOptions)
      const data = await response.json();
      return data;
    }
  
    static addproduct(nombre:any , cantidad:any , precio:any)
    {

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ nombre:nombre, cantidad:cantidad,precio:precio })
      };

      fetch("http://localhost:4000/addproduct", requestOptions)
        .then((response) => response.json())
        .then((responseJSON) => {
          // do stuff with responseJSON here...
           console.log(responseJSON);
        });


    }

     static  async getproduct()
    {

    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };


      const response = await fetch("http://localhost:4000/getproducts", requestOptions);
      const data = await response.json();
      return data;
 

    }


    static  async getproductById(id:any)
    {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id:id })
      };


      const response = await fetch("http://localhost:4000/GetProductById", requestOptions);
      const data = await response.json();
      return data[0];
 

    }


    static async modifyproduct(id:any , cantidad:any , precio:any)
    {
      console.log(id);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id:id, cantidad:cantidad,precio:precio })
      };

      fetch("http://localhost:4000/modifyProduct", requestOptions)
        .then((response) => response.json())
        .then((responseJSON) => {
          // do stuff with responseJSON here...
           console.log(responseJSON);
        });


    }

    static async deleteproduct(id:any )
    {
      
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id:id })
      };

      await fetch("http://localhost:4000/deleteproduct", requestOptions);
 

    }


    static async AddToSellHistory(total:any )
    {
    
    const newDate = new Date();
    let date = newDate.getDate();

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ total: total, date:date})
      };

      const response = await fetch("http://localhost:4000/AddToSellHistory", requestOptions);
      console.log(response.json());

    }


    static async getsellHistory( )
    {
    
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };


      const response = await fetch("http://localhost:4000/getsellHistory", requestOptions);
      const data = await response.json();
      return data;
 
    }

    static async ReduceById(id:any , cantidad:any )
    {

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id:id , cantidad:cantidad})
      };

      await fetch("http://localhost:4000/ReduceById", requestOptions);
 
 
    }



}



export default ManageConnections;