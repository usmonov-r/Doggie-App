import {defineStore} from 'pinia';

export const useDoggieStore = defineStore('doggieData', {
  state: () =>({
    fetchedData : [] as string[],
    limit : 5,
    errorMsg: '',
    readFacts: [] as number[],
    // breeds data
    fetchedBreedsData : [] as {
      name:string;
      description:string;
      life: {min: number; max:number}[];

    }[],
    readBreedsFacts: [] as number[],
  }),

  actions:{ 
    // fetching  dogs  facts
    async fetchFacts() {
      try{
        const response = await fetch(`https://dogapi.dog/api/v2/facts?limit=${this.limit}`)
        if (!response.ok) throw new Error("Failed to fetch data")
        const data = await response.json();
        for(let i=0; i<this.limit; i++)
        this.fetchedData.push(data.data[i].attributes.body)
      }catch (error) {
        this.errorMsg = 'Error fetching data: ' + error;
      }
    },
    // fetching breeds data
    async fetchBreeds(){
      try{
        const response = await fetch('https://dogapi.dog/api/v2/breeds')
        if (!response.ok) throw new Error("Failed to fetch data")
        const data =  await response.json();
        console.log('DATA', data);
        data.data.forEach((breeds: any) =>{
          this.fetchedBreedsData.push({
            name: breeds.attributes.name,
            description: breeds.attributes.description,
            life:[
              {
                max: breeds.attributes.life.max ,
                min: breeds.attributes.life.max  
              },
            ]

          });
        });
        
      } catch (error){
        console.log(error) 
      }
    },
  
    markAsRead(index:number, category:string) {
      if(category === 'facts'){
        if(!this.readFacts.includes(index)){
          this.readFacts.push(index)  
        }
      }else if(category === 'breeds'){
        if(!this.readBreedsFacts.includes(index)){
          this.readBreedsFacts.push(index)  
        }
      }
    }
    
  }

})