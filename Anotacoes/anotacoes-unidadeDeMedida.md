# Tipos Numéricos

* <integer> Número inteiro como -10 ou 223
* <number> Número decimal como -2.4, 64 ou 0.234
* <dimension> É um <number> co uma unidade junto: 90deg, 2s, 8px
* <porcentagem> Representa a fração de outro número: 50%


# Unidades comuns 

* <length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
* <angle> - representa um ângulo: deg, rad, turn
* <time> - representa um tempo: s, ms
* <resolution> - representa resoluções para dispositivos: dpi


# Distâncias absolutas <lenght>

São fixas e não alteram seu valor.

| Unidade  | Nome                | Equivalência         |
|----------|---------------------|----------------------|
| cm       | Centímetros         | 1cm = 96px/2.54      | 
| in       | Inches (polegadas)  | 1in = 2.54cm = 96px  | 
| px       | Pixels              | 1px = 1/96th of 1in  |

* o mais comum e mais utilizado é o px

* não é recomendado usar cm

# Distâncias relativas

São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

Benefício: Maior adaptação aos diferentes tipos de tela.
| Unidade  | Relativo a                                    |
|----------|-----------------------------------------------|
| em       | Tamanho da font do elemento pai               |
| rem      | Tamanho da font do elemento raiz (root/html)  | 
| vw       | 1% da viewport wid                            |  
| vh       | 1% da viewport height                         |

Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração no root ou no elemento html.


# Funções CSS

Exemplos de funções do CSS:

rgb()
hsl()
url()
calc()




