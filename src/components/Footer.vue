<template>
    <footer class="footerMain">
        <div>
                <div class="footerSub">
                    <div class="">
                        <ul class="">
                            <li class=""><a href="#">Retornar à Loja</a></li>
                            <li class=""><a href="#about">Sobre</a></li>
                            <li class=""><a href="#">Contato</a></li>
                            <li class=""><a href="#">Suporte</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Preço baixo✅</li>
                            <li>Aceitamos encomendas✅</li>
                            <li>Compramos seus itens✅</li>
                            <li>Concorra e retire prêmios com Npoints✅</li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="" style="background-color: #333; padding: 20px;">
            2023 Copyright: <a href="#">Neumann Vendas</a>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer-bar'
}
</script>
<style scoped>
.footerMain {
    color: white;
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgb(25, 25, 25) 0%, rgba(50, 50, 50, 1) 100%);
}

.footerSub {
    display: flex;
    justify-content: space-evenly;
}

ul,
li {
    list-style: none;
    text-decoration: none;
}

a {
    color: white;
}
</style>