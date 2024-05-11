import lzma

def ncd(x, y):
    x_y = x + y  # la concaténation des chaînes

    x_comp = lzma.compress(x.encode('utf-8'))  # compresser la chaîne x
    y_comp = lzma.compress(y.encode('utf-8'))  # compresser la chaîne y
    x_y_comp = lzma.compress(x_y.encode('utf-8'))  # compresser la chaîne concaténée

    return (len(x_y_comp) - min(len(x_comp), len(y_comp))) / \
           max(len(x_comp), len(y_comp))
