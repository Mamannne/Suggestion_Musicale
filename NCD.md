Dans ce fichier je vais expliquer ce qu'est la distance NCD et sa pertinence. Pour cela j'explique d'abord ce qu'est la compression. Compresser un fichier revient à le rendre non redondant. Si le mot "arbre" apparait plusieurs fois, alors lors de la compression un code spécifique en binaire sera attribué à arbre et apparaitra dans le fichier compressé. Autrement dit lorsqu'une information est redondante, elle sera codé de sorte à diminuer la taille du fichier.

En prenant deux objets x et y, si x et y contiennent des informations en commun, alors la concaténation des objets x et y nommé x+y pourra être compressé de manière importante. Dans les extrêmes, si x et y sont identiquement les mêmes, alors la C(x+y)=C(x)=C(y) où C(u) est la compression de l'objet u. Inversement si x et y n'ont aucune information en commun, C(x+y) = C(x) + C(y).

On définit alors NCD(x,y) = (C(x+y) - min(C(x),C(y)))/max(C(x),C(y))

Autrement dit, plus deux objets sont ressemblants, plus leur distance est faible et plus ils sont différents plus la distance NCD est grande

L'utilité est que les objets sont quelconques. Dans notre cas, les objets sont des textes. Le style d'écriture est propre à chaque artiste mais si un autre artiste écrit de la même manière que mon artiste préférée, il est assez probable que ce dernier me plaise plus. Ainsi les paroles sont vecteurs d'une information importante.