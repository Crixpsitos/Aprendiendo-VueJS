const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("Hola Mundo");
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "Hola Vue";
      author.value = "Cristián";

    }

    return {
      message,
      author,
      changeQuote,
    };
  },
});

app.mount("#app");
