<template>
  <div class="w-full h-screen bg-slate-900 flex justify-center items-center">
    <img
      v-if="darkMode == true"
      class="absolute top-6 right-6 xl:top-9 xl:right-9 cursor-pointer"
      src="/sun.svg"
      alt=""
      @click="darkFunction"
    />
    <img
      v-else
      class="absolute top-6 right-6 xl:top-9 xl:right-9 cursor-pointer"
      src="/moon.svg"
      alt=""
      @click="darkFunction"
    />
    <div
      class="
        bg-white
        dark:bg-slate-800
        w-1/2
        lg:w-6/12
        md:w-2/3
        h-80
        rounded-xl
        p-8
        flex flex-col
        justify-center
        items-center
      "
    >
      <img class="w-16" src="/whatsapp.svg" alt="Whatsapp" />
      <p class="text-4xl font-bold text-slate-500 mt-7">Adicionar Contato</p>
      <div class="flex justify-center items-center mt-8">
        <input
          type="text"
          v-model="telefone"
          @keypress.enter="addWhats"
          v-mask="['(##) ####-####', '(##) #####-####']"
          placeholder="DDD + Telefone"
          class="
            transition
            ease-in-out
            duration-300
            border-2 border-gray-300
            dark:border-slate-500
            focus:outline-none focus:ring focus:border-blue-500 focus:bg-white
            dark:focus:border-blue-500
            w-56
            h-12
            rounded-md
            text-lg
            px-4
            py-2
            bg-gray-100
            dark:bg-slate-900
            text-gray-600
            dark:text-gray-400
          "
        />
        <button
          @click="addWhats"
          class="
            bg-green-500
            p-3
            rounded-lg
            ml-2
            flex
            justify-center
            items-center
            hover:bg-green-600
            transition
            ease-in-out
            duration-300
            text-white
          "
        >
          <span class="font-bold ml-1 flex justify-center items-center">
            <img class="mr-1" src="/mais.svg" alt="" />
            Adicionar</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telefone: "",
      darkMode: "",
    };
  },
  mounted() {
    let darkMode = localStorage.getItem("theme");
    if (
      darkMode === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  methods: {
    darkFunction() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
      }

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    addWhats() {
      /*   let parentesesLeft = this.telefone.replace("(", "");
      let parentesesRight = parentesesLeft.replace(")", "");
      let hifen = parentesesRight.replace("-", "");
      let telefone = hifen.replace(" ", ""); */
      //TIRA TODOS OS CARACTERES QUE NÃO SÃO NUMERICOS E ESPAÇOS
      let telefone = this.telefone.replace(/\D/g, "");
      /* window.location.href = `https://web.whatsapp.com/send?phone=55${telefone}`; */
      window.open(
        `https://web.whatsapp.com/send?phone=55${telefone}`,
        "_blank"
      );
      this.telefone = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap");
p {
  font-family: "DM Sans", sans-serif;
}
input {
  font-family: "Poppins", sans-serif;
}
</style>