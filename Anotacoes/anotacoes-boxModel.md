# BOX MODEL

O Box Model é fundamental para fazer layouts para web porque ele vai te dar maior facilidade na hora de aplicar o CSS. Ao entender os conceitos do Box Model muitas questões do CSS começam a fazer sentido.

# O que é o Box Model?
Cada elemento é representado como uma caixa retangular
Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)

# Propriedades da caixa
Tamanho (largura x altura) → width | height
Conteúdo → content
Bordas → border
Preenchimento interno → padding
Espaços fora da caixa → margin

# Display-block-inline

display: block; vs display: inline;
Como as caixas se comportam em relação as outras caixas
Comportamento externo das caixas

* Display Block
- Ocupa toda a linha, colocando o próximo elemento abaixo desse
- width e height são respeitados
- padding, margin, border irão funcionar normalmente

* Display Inline
- Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
- width e height não funcionam
- Somente valores horizontais de margin

 
# MARGIN
Margin, é o espaço (margem) entre os elementos

Podemos dividir o margin em 4 valores:

* margin-top | margin-right | margin-bottom | margin-left
values: <length> | <percentage> | auto

* Geralmente usamos uma forma abreviada (shorthand) para escrever o margin. Esse formato segue o sentido horário iniciando pelo top, seguindo para right, bottom e left.

margin: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
margin: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
margin: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
margin: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */

* margin collapsing só se aplica no top e bottom.


# Border-outline

* BORDER
value: <border-style> | <border-width> | <border-color>

style: solid | dotted | dashed | double | groove | ridge | inset | outset
width: <length>
color: <color>

* Outline
O outline é muito semelhante ao border, mas difere em 4 sentidos:
- Não modifica o tamanho da caixa, pois não é parte do Box Model
- Poderá ser diferente de retangular
- Não permite ajuste individuais
- Mais usado pelo user agent para acessibilidade














