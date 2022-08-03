function sayMyName2(name) {

    console.log("Antes de executar a Callback")

    name()

    console.log("Depois de executar a Callback")
}

sayMyName2(
    () => {
        console.log("Estou em uma Callback")
    }
);