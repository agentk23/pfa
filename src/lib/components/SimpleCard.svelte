<script>
    export let forwardClickAction = () => {
        console.log("forward click action");
    };
</script>
<div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
      <div class="p-5">
        <p class="text-medium mb-5 text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt in voluptatem. Ex quis aspernatur, quisquam rem alias unde inventore?</p>
        <button on:click={forwardClickAction} class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Start your PFA</button>
      </div>
    </div>
  </div>