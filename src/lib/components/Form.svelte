<script lang="ts">
  import type { User, Firm } from "$lib/types";

  export let fullName = "John Doe";
  export let email = "example@domain.com";
  export let address = "1234 Main St";
  export let phone = "+4077123451";
  export let CNP = "5010523123321";
  
  export let firmName = "Firma SRL";
  export let cui = "12345678";
  export let regComert = "J40/1234/2021";
  export let faddress = "1234 Main St";
  export let fphone = "+4077123451";
  export let dataInfiintare = new Date("2021-01-01");
  export let caen = ["6201", "6202", "6203", "6204", "6209"];

  function handleFirmRegistration(){
    //validate user input
    //create firm and user object
    let firm: Firm = {
      firmName: firmName,
      cui: cui,
      regCom: regComert,
      faddress: faddress,
      fphone: fphone,
      fdataInfiintare: dataInfiintare,
      fcaen: caen
    }
    let user: User = {
      name: fullName,
      email: email,
      address: address,
      phone: phone,
      CNP: CNP,
      firm: firm
    }
    console.log(JSON.parse(JSON.stringify(user)));


    //write firm and user to fs
    //redirect to dashboard
  }
  function validateUserInput(){
    //validate user input
  }
</script>

<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Personal Details</p>
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={fullName} />
                </div>
  
                <div class="md:col-span-5">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={email} placeholder="email@domain.com" />
                </div>
  
                <div class="md:col-span-3">
                  <label for="address">Address</label>
                  <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={address} placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="phone">Phone </label>
                  <input type="text" name="phone" id="phone" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={phone} placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="cnp">CNP</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="cnp" id="cnp" placeholder="cnp" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" bind:value={CNP} />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-full">
                    <div class="h-10 w-full border-1 border-gray-300"></div>
                </div>
                <div class="md:col-span-full">
                <div class="text-gray-600">
                    <p class="font-medium text-lg">Firm Details</p>
                  </div>
                  </div>
                  
                <div class="md:col-span-5">
                  <label for="firm">Numele Firmei</label>
                  <div class="h-10 bg-gray-50 flex border bord /arer-gray-200 rounded items-center mt-1">
                    <input name="firm" id="firm" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" bind:value={firmName} />
                    
                  </div>
                </div>
  
                <div class="md:col-span-2">
                  <label for="cui">CUI</label>
                  <input type="text" name="cui" id="cui" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Codul Unic de Inregistrare" bind:value={cui} />
                </div>
  
               
  
                <div class="md:col-span-3">
                    <label for="regComert">Nr. de Inregistrare in Reg. Comert</label>
                    <input type="text" name="regComert" id="regComert" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" bind:value={regComert}/>
                </div>
                <div class="md:col-span-3">
                    <label for="faddress">Adresa sediu</label>
                    <input type="text" name="faddress" id="faddress" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={faddress} placeholder="" />
                  </div>
    
                  <div class="md:col-span-2">
                    <label for="fphone">Telefon </label>
                    <input type="text" name="fphone" id="fphone" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" bind:value={fphone} placeholder="" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="dataInfiintare">Data Inregistrare</label>
                    <input type="date" name="dataInfiintare" id="dataInfiintare" class="h-10 border mt-1 rounded w-full bg-gray-50 px-3 text-lg" bind:value={dataInfiintare} placeholder="" />

                  </div>
                  <div class="md:col-span-2">
                        <label for="caen">Cod CAEN</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input name="caen" id="caen" placeholder="caen" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" bind:value={caen}  />
                          <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                            <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>
                      </div>
                  </div>
                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button  on:click={handleFirmRegistration} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Creeaza firma</button>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>